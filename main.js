var data = [
	3,0,6,5,0,8,4,0,0,
	5,2,0,0,0,0,0,0,0,
	0,8,7,0,0,0,0,3,1,
	0,0,3,0,1,0,0,8,0,
	9,0,0,8,6,3,0,0,5,
	0,5,0,0,9,0,6,0,0,
	1,3,0,0,0,0,2,5,0,
	0,0,0,0,0,0,0,7,4,
	0,0,5,2,0,6,3,0,0
	];
var truthTable = [];
var truthTable2 = [];
var selectionTable = [];
var ids = [];
var indexs = [];
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

valifyColumn = (id,num) =>{
	var col = getColumn(id);
	var isTrue = false;

	for (var i = 0; i < col.length; i++) {
		let index = col[i];
		if (num == data[index]) {
			isTrue = true;
		}
	}
	return isTrue;
}

valifyRow = (id,num) =>{
	var row = getRow(id);
	var isTrue = false;

	for (var i = 0; i < row.length; i++) {
		let index = row[i];
		if (num == data[index]) {
			isTrue = true;
		}
	}
	return isTrue;
}

valifySquare =(id,num)=>{
	var tempData = selectionTable3[getSelection(id)-1];
	var isTrue = false;
	for (var i = 0; i < tempData.length; i++) {
		let index = tempData[i];
		if (num == tempData[index]) {
			isTrue = true;
		}
	}
	return isTrue;
}

valifyGrid = (id,num)=>{
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
	// return null
}
let ID = getID();

while(ID <81){
	let num = Math.floor(Math.random()*9);
	// console.log(num)
	num = (num== 0?1:num);
	if (ID) {
		// console.log(ID)
		document.getElementById(ID).innerHTML = num;
		document.getElementById(ID).classList.add("current");
		truthTable[getNumber(ID)] = false;
		ID = getID();
// console.log(ID)
		// console.log(getID());
		// ID++;	
	}else{
		ID = 11;
	}
}