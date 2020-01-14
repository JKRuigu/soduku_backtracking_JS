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
	// sodukuSolver(puzzle);	
},2000);