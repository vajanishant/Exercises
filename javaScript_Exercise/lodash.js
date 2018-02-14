class Person {

	constructor() {
		this.persons = [];
	}

	set addPersons(personData) {
		this.persons.push(personData);
	}

	get getPersons() {
		return persons;
	}

}

class Adult extends Person {

	constructor(children) {
		super();
		this.children = children;
		this.adults = [];
	}

	set addAdults(adultData) {
		this.adults.push(adultData);
	}

	get getAdults() {
		return adults;
	}

}

let john =  {
	firstName: 'john',
	lastName: 'nathhan',
	age: 26,
	skills: ['run', 'jump'],
	gender: 'male',
	married: true
}

let chang = {
	firstName: 'chang',
	lastName: 'lee',
	age: 18,
	skills: ['run', 'swim'],
	gender: 'male',
	married: false,
}

let teena = {
	firstName: 'teena',
	lastName: 'ambani',
	age: 22,
	skills: ['dance', 'acting', 'jump'],
	gender: 'female',
	married: true
}

let meena = {
	firstName: 'meena',
	lastName: 'mani',
	age: 10,
	skills: ['dance', 'singing'],
	gender: 'female',
	married: false
}

let sachin = {
	firstName: 'sachin',
	lastName: 'tendulkar',
	age: 30,
	skills: ['run', 'jump'],
	gender: 'male',
	married: true
}

let sangeeta = {
	firstName: 'sangeeta',
	lastName: 'shrimani',
	age: 50,
	skills: ['dancing'],
	gender: 'female',
	married: true
}

let geet = {
	firstName: 'geet',
	lastName: 'gulani',
	age: 55,
	skills: ['singing'],
	gender: 'female',
	married: true
}

let alan = {
	firstName: 'alan',
	lastName: 'walker',
	age: 60,
	skills: ['reading', 'swim', 'run'],
	gender: 'male',
	married: true
}

let children = {
	meena: alan,
	teena: sangeeta,
	chang: sangeeta,
	john: geet,
}

let person = new Person();
let adult = new Adult(children);

adult.addPersons = john;
adult.addPersons = chang;
adult.addPersons = sachin;
adult.addPersons = teena;
adult.addPersons = meena;
adult.addPersons = alan;
adult.addPersons = sangeeta;
adult.addPersons = geet;

adult.addAdults = alan;
adult.addAdults = sangeeta;
adult.addAdults = geet;
adult.addAdults = sachin;

// console.log(person);
// console.log(adult.adults);

// let taskOne = [];
// adult.persons = adult.persons.sort((a,b) => a.age - b.age);
// console.log(adult.persons);

let ageAboveThirty = _.filter(adult.adults, function(obj) { return obj.age > 30 } );
console.log('age above 30 ');
console.log(ageAboveThirty);

let swimAndRun = _.filter(ageAboveThirty, {'skills': ['run', 'swim']});
console.log('adult who can run and swim above age 30 ');
console.log(swimAndRun);

// ***************************************************************************************

let allPeople = adult.persons;
console.log('all people ');
console.log(allPeople);

// ***************************************************************************************

let childrens = _.difference(adult.persons, adult.adults);
console.log('only childrens ');
console.log(childrens);

let childWhoSwims = _.filter(childrens, {'skills': ['swim']});
let childWhoDance = _.filter(childrens, {'skills': ['dance']});

// console.log('test');
// console.log(childWhoDance);
// console.log(childWhoSwims);

let childrenWhoSwimOrDance = _.concat(childWhoDance,childWhoSwims);
console.log('childrens who can swim and dance sorted by gender and age ');
console.log( _.sortBy(childrenWhoSwimOrDance, ['gender','age']));

// ***************************************************************************************

let unmarriedDaughter = _.filter(childrens,function(obj) {
	if(obj.gender == 'female') {
		if(obj.married == false) 
			return obj;
	}
}
);

console.log('!!!!');
console.log(unmarriedDaughter);

let adultWhoseChildIsUnmarried = [];

_.forOwn(adult.children, function(value, key) {
	if(key == unmarriedDaughter[0].firstName)
		adultWhoseChildIsUnmarried = value;
}
);

console.log('hi');
console.log(adultWhoseChildIsUnmarried);

// ***************************************************************************************

let marriedPersonWhoCanjump = _.filter(adult.persons,function(obj) {
	return (obj.married && obj.skills.includes('jump'));
});

console.log('jump');
console.log(marriedPersonWhoCanjump);

// ***************************************************************************************

let marriedChild = _.filter(childrens, {'married': true});

console.log('6');
console.log(marriedChild);

let parentWhoseChildrensAreMarried = [];
// let parent = [];
// let index = 0;

for(let index = 0; index < marriedChild.length; index++){
	_.forOwn(adult.children, function(value,key) {
		if(key == marriedChild[index].firstName)
			parentWhoseChildrensAreMarried.push(value);
	})
}

console.log('pareeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeenTttttttttttttttttttttttttt');
// console.log(parentWhoseChildrensAreMarried);
_.forEach(parentWhoseChildrensAreMarried, function(value) {
	if(value.lastName > 'i') {
		console.log(value);
	}
});

// ***************************************************************************************

childrens = _.difference(adult.persons, adult.adults);

console.log('only childrens q9');
console.log(childrens);

// ***************************************************************************************

_.rename = function(obj, key, newKey) {
	if(_.includes(_.keys(obj), key)) {
		obj[newKey] = _.clone(obj[key], true);

		delete obj[key];
	}
	return obj;
};

_.forEach(adult.persons, function(obj) {
	_.rename(obj, 'firstName', 'first');
	_.rename(obj, 'lastName', 'last');
})

console.log('7th one');
console.log(adult.persons);

// ***************************************************************************************

let personsAges = [];
/*personsAges.push((adult.persons).forEach((value, ind) => {
return value.age;
}))*/

_.forEach(adult.persons, (result) =>{ personsAges.push(result.age); });
console.log('que 10');
console.log(personsAges);
// ***************************************************************************************

console.log(_.times(3, String));