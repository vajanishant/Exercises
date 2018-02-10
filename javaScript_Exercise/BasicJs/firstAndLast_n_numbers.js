
//  Question: Write a JavaScript function to get the first and last element of an array.
// 			  Passing aparameter 'n' will return the first 'n' elements of the array and 
//			  last ‘n’ elements of the array.

//	THIS IS THE SIMPLEST VERSION OF THE TASK AND AFTER THIS VERSION IN THE SAME FILE 
//	WE HAVE A REALTIME SCENARIO OF THE TASK.

console.log("This is the SIMPLEST version of given task");

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let num = +prompt("Enter a number", 1);

while (true) {

	if(isNaN(num))
		num = +prompt('Enter a valid number', 1);
	else if(num < 0 || num > 9)
		num = +prompt('Enter a valid number between 0 to 9', 1);
	else
		break;

}

function getNum(num) {

	console.log(arr.slice(0,num));
	console.log(arr.slice(-num));

}

getNum(num);

//--------------------------------------------------------------------------------------

//	THIS IS A REALTIME EXAMPLE OF THE GIVEN CODE

console.log("This is the REALTIME VERSION");

const Student = [{name: 'Allen', id: 4},
				 {name: 'John', id: 6},
				 {name: 'Sameer', id: 5},
				 {name: 'Alex', id: 8},
				 {name: 'Dip', id: 9},
				 {name: 'Alexa', id: 1},
				 {name: 'Micky', id: 3},
				 {name: 'Andrew', id: 2},
				 {name: 'Sam', id: 7}
				];	// Here we have an array of object contains student name and student id which is sorted Rank based i.e, 4th id is the first in the class, 6th is the second, 5th is the third and so on...

				function displayList(number) {

					console.log(`This ${number} students are toppers of the class`)

					for(let index = 0; index < number; index++)
					{
						console.log(Student[index].name );
					}

					console.log(`This ${number} students got least grades`)

					for(let index = Student.length-1; index >= Student.length-number; index--)
					{
						console.log(Student[index].name );
					}

				}


				displayList(num);



