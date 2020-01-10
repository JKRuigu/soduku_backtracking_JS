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
var ids = [];
var indexs = [];
var row = 9;
var column = 9;

generateTruthTable = (data)=>{
	for (var i = 0; i < data.length; i++) {
		if (data[i] == 0) {
			truthTable.push(false);
		}else{
			truthTable.push(true);
		}
	}
}
generateTruthTable(data);

initialize = ()=>{
	for (var i = 1; i <= column; i++) {
		for (var j = 1; j <= row; j++) {
			ids.push(String(i)+String(j));
			let index = (((i*row)+j)-column)-1;
			indexs.push(index);
			document.getElementById(String(i)+String(j)).innerHTML = data[index];
		}
	}
}

initialize();

getNumber = (id)=>{
	if (Number(Number(String(id)[0])) !=1) {
		return ((Number(String(id)[0])-1)*column+Number(String(id)[1]))-1;
	}
	return (Number(String(id)[1]))-1;
}


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

console.log(getColumn(99));
// console.log(getNumber(89));
// console.log(getRow(25));