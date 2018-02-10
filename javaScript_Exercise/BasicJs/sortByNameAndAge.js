
let person = [
{name: 'b', age: 30}, 
{name: 'c', age: 18}, 
{name: 'a', age: 40}, 
{name: 'f', age: 10},
{name: 'd', age: 32}
];

let person2 = person;

function sortAge(person) {
  person.sort((a,b) =>  (a.age - b.age));
}

function sortName(person) {
  person.sort((a,b) => a.name < b.name);
}

sortAge(person);
// person = sortName(person);
console.log(JSON.stringify(person));
sortName(person);
console.log(JSON.stringify(person));
// sortName(person);
// setTimeout(function () {
//   console.log('timed out');
//   sortAge(person2);
//   console.log(person);
// },10000);


