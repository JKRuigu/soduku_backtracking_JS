function sodukuSolver(puzzle) {
	var nonPossibilities  = {},impossibleNumbers,emptySpaces = 81;
	while(emptySpaces>0){
		emptySpaces = 0;
		for (var vert =0; vert < puzzle.length; vert++) {
			for (var horz = 0; horz<puzzle.length; horz++) {
				nonPossibilities = {};
				if (puzzle[vert][horz] === 0) {
					for (var i = 0; i < 9; i++) {
						if (puzzle[vert][i]>0) {
							nonPossibilities[puzzle[vert][i]] = true;
						}
						if (puzzle[i][horz] >0) {
							nonPossibilities[puzzle[i][horz]] = true;
						}
					}
					for (var vertBox = Math.floor(vert/3)*3; vertBox<Math.floor(vert/3)*3+3; vertBox++) {
						for (var horzBox = Math.floor(horz/3)*3; horzBox<Math.floor(horz/3)*3+3; horzBox++) {
							if (puzzle[vertBox][horzBox]) {
								nonPossibilities[puzzle[vertBox][horzBox]] = true;
							}
						}	
					}
					for(i = 0; i<10; i++){
						// console.log('new-nonPossibilities',nonPossibilities[i],i);

					}
					console.log();
						let ID = String(vert+1)+String(horz+1);
						
					impossibleNumbers = Object.keys(nonPossibilities);

					if (impossibleNumbers.length === 8) {
						for(var i =1; i<10; i++){
							if (impossibleNumbers.indexOf(i.toString()) < 0) {
								document.getElementById(ID).innerHTML = i;
								document.getElementById(ID).classList.add("current");							
								puzzle[vert][horz] = i;
							}
						}
					}else{
						emptySpaces++;
					}
				}
			}
		}
	}

	for(var vert = 0; vert<puzzle.length; vert++){
		var row = '';
		var n = 2;
		for(var horz = 0; horz<puzzle.length; horz++){
			row +=(puzzle[vert][horz]);
			if (horz == n && n < 8) {
				row += '|';
				n = n + 3;
			}
		}
		// document.write(row+ '<br>');
	}
	return print(puzzle);
}

// var puzzle = [
// 	[5,3,0,0,7,0,0,0,0],
// 	[6,0,0,1,9,5,0,0,0],
// 	[0,9,8,0,0,0,0,6,0],
// 	[8,0,0,0,6,0,0,0,3],
// 	[4,0,0,8,0,3,0,0,1],
// 	[7,0,0,0,2,0,0,0,6],
// 	[0,6,0,0,0,0,2,8,0],
// 	[0,0,0,4,1,9,0,0,5],
// 	[0,0,0,0,8,0,0,7,9]
// 	]
// var puzzle = [
// 	[9,8,6,1,0,5,0,0,0],
// 	[0,3,0,0,0,0,0,0,0],
// 	[0,0,0,7,0,4,6,0,0],
// 	[6,0,0,4,0,0,1,0,0],
// 	[2,0,0,0,0,0,0,0,6],
// 	[0,0,8,0,0,9,0,0,4],
// 	[0,0,4,9,0,7,0,0,0],
// 	[0,0,0,0,0,0,0,2,0],
// 	[0,0,0,6,0,8,5,1,9]
// 	]

var puzzle = [
	[9,8,6,1,0,5,0,0,0],
	[0,3,0,0,0,0,0,0,0],
	[0,0,0,7,0,4,6,0,0],
	[6,0,0,4,0,0,1,0,0],
	[2,0,0,0,0,0,0,0,6],
	[0,0,8,0,0,9,0,0,4],
	[0,0,4,9,0,7,0,0,0],
	[8,6,9,3,5,0,0,2,0],
	[0,0,0,6,0,8,5,1,9]
	];
function print(puzzle) {
	console.log(' -------------------')
	for (var i = 0; i < puzzle.length; i++) {
		console.log('|',puzzle[i].toString(),'|');
		if (i == 2 || i == 5) {
			console.log(`|-------------------|`);
		}
	}
	console.log(' -------------------')
}

for (var i = 1; i <= puzzle.length; i++) {
	for (var j = 1; j <= 9; j++) {
		let ID = String(i)+String(j);
		j < 4 && i <4?document.getElementById(ID).classList.add("one"):null
		j > 6 && i > 6?document.getElementById(ID).classList.add("one"):null
		j <4  && i > 6?document.getElementById(ID).classList.add("one"):null
		j > 6  && i < 4?document.getElementById(ID).classList.add("one"):null
		j > 3 && j <7 && i > 3 && i < 7?document.getElementById(ID).classList.add("one"):null
		
		document.getElementById(ID).innerHTML = puzzle[i-1][j-1];
	}
}

setTimeout(()=>{
	sodukuSolver(puzzle);	
},2000);

/**
// var data = [
// 	3,0,6,5,0,8,4,0,0,
// 	5,2,0,0,0,0,0,0,0,
// 	0,8,7,0,0,0,0,3,1,
// 	0,0,3,0,1,0,0,8,0,
// 	9,0,0,8,6,3,0,0,5,
// 	0,5,0,0,9,0,6,0,0,
// 	1,3,0,0,0,0,2,5,0,
// 	0,0,0,0,0,0,0,7,4,
// 	0,0,5,2,0,6,3,0,0
// 	];
var data = [
	3,0,6,5,0,8,4,0,0,
	5,2,0,0,0,0,0,0,0,	
	0,8,7,0,0,0,0,3,1,	
	0,0,3,0,1,0,0,8,0,	
	9,0,0,8,6,3,0,0,5,	
	0,5,0,0,9,0,6,0,0,	
	1,3,0,0,0,0,2,5,0,	
	0,0,0,0,0,0,0,7,4,
	0,0,5,2,0,6,3,0,0]

var truthTable = [];
var truthTable2 = [];
var selectionTable = [];
var ids = [];
var indexs = [];
var availabeIds=[];
var row = 9;
var column = 9;
var selectionTable2 = [[],[],[],[],[],[],[],[],[]];
var selectionTable3 = [[],[],[],[],[],[],[],[],[]];

getSelection = id =>{
	let x = Number(String(id)[1]);
	let x2 = Number(String(id)[0]);
	let section = x<4?1:x<7?2:3;
	let section2 = x2<4?1:x2<7?3:6;
	section2 = Number(id) < 41?0:section2;
	return (section+section2);
}

generateTruthTable = data =>{
	for (var i = 0; i < data.length; i++) {
		if (data[i] == 0) {
			availabeIds.push(i);
			truthTable.push(true);
			truthTable2.push(true);
		}else{
			truthTable.push(false);
			truthTable2.push(false);
		}
	}
}

generateTruthTable(data);

initialize = () =>{
	for (var i = 1; i <= column; i++) {
		for (var j = 1; j <= row; j++) {
			ids.push(String(i)+String(j));
			selectionTable.push(getSelection(String(i)+String(j)));
			let sec = getSelection(String(i)+String(j));
			let sec2 = sec==1||sec==3||sec==5||sec==7||sec==9?"one":"two";
			document.getElementById(String(i)+String(j)).classList.add(sec2);	
			let index = (((i*row)+j)-column)-1;
			indexs.push(index);
			document.getElementById(String(i)+String(j)).innerHTML = data[index];
		}
	}
}

sections = () =>{
	for (var i = 0; i < row*column; i++) {
		if (selectionTable[i] == 1) {
			if ( truthTable[i] ) {
				selectionTable2[0].push(i);
			}
		}else if (selectionTable[i] == 2) {
			if ( truthTable[i] ) {
				selectionTable2[1].push(i);
			}
			
		}else if (selectionTable[i] == 3) {
			if ( truthTable[i] ) {
				selectionTable2[2].push(i);
			}
			
		}else if (selectionTable[i] == 4) {
			if ( truthTable[i] ) {
				selectionTable2[3].push(i);
			}
			
		}else if (selectionTable[i] == 5) {
			if ( truthTable[i] ) {
				selectionTable2[4].push(i);
			}
			
		}else if (selectionTable[i] == 6) {
			if ( truthTable[i] ) {
				selectionTable2[5].push(i);
			}
			
		}else if (selectionTable[i] == 7) {
			if ( truthTable[i] ) {
				selectionTable2[6].push(i);
			}
			
		}else if (selectionTable[i] == 8) {
			if ( truthTable[i] ) {
				selectionTable2[7].push(i);
			}
			
		}else if (selectionTable[i] == 9) {
			if ( truthTable[i] ) {
				selectionTable2[8].push(i);
			}
			
		}
	}
}

sections2 = () =>{
	for (var i = 0; i < row*column; i++) {
		if (selectionTable[i] == 1) {
				selectionTable3[0].push(i);
		}else if (selectionTable[i] == 2) {
				selectionTable3[1].push(i);
		}else if (selectionTable[i] == 3) {
				selectionTable3[2].push(i);
		}else if (selectionTable[i] == 4) {
				selectionTable3[3].push(i);
		}else if (selectionTable[i] == 5) {
				selectionTable3[4].push(i);
		}else if (selectionTable[i] == 6) {
				selectionTable3[5].push(i);
		}else if (selectionTable[i] == 7) {
				selectionTable3[6].push(i);
		}else if (selectionTable[i] == 8) {
				selectionTable3[7].push(i);
		}else if (selectionTable[i] == 9) {
				selectionTable3[8].push(i);
		}
	}
}

initialize();

getNumber = id =>{
	if (Number(Number(String(id)[0])) !=1) {
		return ((Number(String(id)[0])-1)*column+Number(String(id)[1]))-1;
	}
	return (Number(String(id)[1]))-1;
}
sections();
sections2();

getRow = id =>{
	var min  = 0;
	var max = 0;
	var numX = getNumber(id)+1;
	let tempData = [];

	for (var i = 0; i <=column*row; i+=row) {
		if (i !=0) {
			min = max;
			max = i;

			if (numX >min && numX<=max) {
				min = min==0?0:min;
				for (var j = min; j < max; j++) {
					tempData.push(j);
				}
				break;
			}
		}
	}
	return tempData;
}

// GET COLUMN DATA;
getColumn = id =>{
	let tempData = [];
	for (var i = 0; i< column*row; i+=row) {
		tempData.push(i+Number(String(id)[1]-1));
	}
	return tempData;
}

// valifyColumn = (id,num) =>{
// 	var col = getColumn(id);
// 	var isTrue = false;

// 	for (var i = 0; i < col.length; i++) {
// 		let index = col[i];
// 		if (num == data[index] && data[index] != 0) {
// 			isTrue = true;
// 		}
// 	}
// 	return isTrue;
// }

// valifyRow = (id,num) =>{
// 	var row = getRow(id);
// 	var isTrue = false;

// 	for (var i = 0; i < row.length; i++) {
// 		let index = row[i];
// 		if (num == data[index]) {
// 			isTrue = true;
// 		}
// 	}
// 	return isTrue;
// }


// valifySquare =(id,num)=>{
// 	var tempData = selectionTable3[getSelection(id)-1];
// 	var isTrue = false;
// 	for (var i = 0; i < tempData.length; i++) {
// 		let index = tempData[i];
// 		if (num == data[index]) {
// 			isTrue = true;
// 		}
// 	}
// 	return isTrue;
// }

checkColumn = id =>{
	let col = getColumn(id);
	let col2 = [];
	let isDuplicate = false;

	for (var i = 0; i < col.length; i++) {
		let index = data[col[i]]
		if (index != 0 ) {
			col2.push(index)
		}
	}
	col2 = col2.sort();

	for (var i = 0; i < col2.length; i++) {
		if (col2[i]== col2[i-1]) {
			isDuplicate = true;
			break;
		} 
	}
	return isDuplicate;
}



checkRow = id =>{
	let row = getRow(id);
	let row2 = [];
	let isDuplicate = false;

	for (var i = 0; i < row.length; i++) {
		let index = data[row[i]]
		if (index != 0 ) {
			row2.push(index)
		}
	}
	row2 = row2.sort();

	for (var i = 0; i < row2.length; i++) {
		if (row2[i]== row2[i-1]) {
			isDuplicate = true;
			break;
		} 
	}
	return isDuplicate;
}

checkSquare = id =>{
	let square = selectionTable3[getSelection(id)-1];
	let square2 = [];
	let isDuplicate = false;

	for (var i = 0; i < square.length; i++) {
		let index = data[square[i]]
		if (index != 0 ) {
			square2.push(index)
		}
	}
	square2 = square2.sort();

	for (var i = 0; i < square2.length; i++) {
		if (square2[i]== square2[i-1]) {
			isDuplicate = true;
			break;
		} 
	}
	return isDuplicate;
}


valifyGrid = (id,num)=>{
	// console.log(valifyRow(id,num),valifyColumn(id,num),valifySquare(id,num))
	if (valifyRow(id,num) && valifyColumn(id,num) && valifySquare(id,num)) {
		return false
	}else{
		return true
	}
}
getID = ()=>{
	for (var i =0;  i<truthTable.length; i++) {
		if (truthTable[i]) {
			return Number(ids[i]);
		}
	}
}


getAvailable = id =>{
	let tempData = [
			3,0,6,5,0,8,4,0,0,
			5,2,0,0,0,0,0,0,0,	
			0,8,7,0,0,0,0,3,1,	
			0,0,3,0,1,0,0,8,0,	
			9,0,0,8,6,3,0,0,5,	
			0,5,0,0,9,0,6,0,0,	
			1,3,0,0,0,0,2,5,0,	
			0,0,0,0,0,0,0,7,4,
			0,0,5,2,0,6,3,0,0];
	let row = getRow(id);
	let col = getColumn(id);
	let square = selectionTable3[getSelection(id)-1];
	let num = [1,2,3,4,5,6,7,8,9];

	for (var i = 0; i < row.length; i++) {
		let index = row[i]
		num = num.filter(x=>x!=tempData[index]);
	}

	for (var i = 0; i < col.length; i++) {
		let index = col[i]
		num = num.filter(x=>x!=tempData[index]);
	}

	for (var i = 0; i < square.length; i++) {
		let index = square[i]
		num = num.filter(x=>x!=tempData[index]);
	}
	return num;
}
let INDEX = 0;
let interval =0;

solveGrid = ()=>{
	let ID = ids[availabeIds[INDEX]];
	let index =0;
	let num = getAvailable(ID);
	let l = Math.floor(Math.random()*num.length);
	// console.log(ID,num.length,l)
	truthTable[getNumber(ID)] = false;
	data[getNumber(ID)] = num[l];
	document.getElementById(ID).innerHTML = num[l];
	document.getElementById(ID).classList.add("current");
	if (interval <20) {
		if (checkRow(ID) || checkColumn(ID) || checkSquare(ID)) {
			INDEX = INDEX==0?0:INDEX--
			console.log("BACKTRACKING...");
			solveGrid();
		}else{
			INDEX++;
			solveGrid();
		}		
	}
	interval++;
}

setTimeout(()=>{
	solveGrid();
},5000)



// while(INDEX != 3){
// 	let ID = ids[availabeIds[INDEX]];
// 	let index =0;
// 	let num = getAvailable(ID);
// 	// console.log(num,availabeIds.length);
// 	truthTable[getNumber(ID)] = false;
// 	data[getNumber(ID)] = num[index];
// 	document.getElementById(ID).innerHTML = num[index];
// 	console.log(checkRow(ID),checkColumn(ID),checkSquare(ID),num.length);
// 	if (checkRow(ID) || checkColumn(ID) || checkSquare(ID)) {
// 		console.log("BACKTRACKING...");
// 		INDEX = INDEX != 0?INDEX--:0;
// 		index =0;
// 		let ID = ids[availabeIds[INDEX]];
// 		let num = getAvailable(ID);
// 		let n = Math.floor(Math.random()*num.length);
// 		data[getNumber(ID)] = num[n];
// 		document.getElementById(ID).innerHTML = num[n];	
// 	}else{
// 		index =0;
// 		INDEX++
// 	}

// 	document.getElementById(ID).classList.add("current");
// }
**/