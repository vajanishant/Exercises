const Persons = [
{id: 1, name: 'Deepak', age: 15, hobbies:['reading', 'travelling', 'music']},
{id: 2, name: 'Finn', age: 34, hobbies:['swimming', 'dancing', 'music']},
{id: 3, name: 'Henry', age: 23, hobbies:['walking', 'cycling', 'dancing']}
];

let hobbies = [];

function matchHobbies(Persons, hobbies) {

	for(let index = 0; index < Persons.length; index++) {

		for(let ind = Persons.hobbies[0]; ind < Persons.hobbies.length; ind++)
		{
			hobbies.ind.push(Persons[index].name);
		}

	}

	console.log(hobbies);

}

matchHobbies(Persons, hobbies);