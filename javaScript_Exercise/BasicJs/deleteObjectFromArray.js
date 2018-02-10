const Obj_array = [
{ name: 'Jay', age: 32},
{ name: 'Veeru', age: 21},
{ name: 'Karan', age: 43},
{ name: 'Arjun', age: 12},
{ name: 'Seeta', age: 22},
{ name: 'Geeta', age: 18},
{ name: 'Kavi', age: 54}
];

function removeObj(objArray) {
	
	let objRef = prompt('Enter name you want to delete from array (please note that it will DELETE ALL DATA related to entered name)', 'Karan');
	let index = -1;

	objArray.filter((value,ind) => {if(value.name == objRef)index = ind;});
	
	if(index != -1)
	objArray.splice(index,1);
	
	console.log(objArray);

}

function addObj(objArray) {
	
	let name = prompt("Enter name you want to add to array of object", 'Ram');
	let age = +prompt(`Enter age of ${name} `, 20);
	let position = +prompt("Enter the index where you want to insert your data", 2);
	objArray.splice(position,0,{name: name, age: age});
	console.log(objArray);

}

removeObj(Obj_array);
addObj(Obj_array);
