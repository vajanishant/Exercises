class Animal {

	constructor() {
		this.animals = [];
	}

	set animal(animalObj) {
		this.animals.push(animalObj);
	}

	get animal() {
		return this.animals;
	}

	displayAnimalNames() {
		// console.log(`This animal's name is ${this.name} and eats ${this.typeOfFood}.`);
		this.animals.forEach((item) => {console.log(item);})
	}

}	

class Cat extends Animal {

	constructor() {
		super();
		this.cats = [];
	}

	set cat(catObj) {
		this.cats.push(catObj);
	}

	get cat() {
		return this.cats;
	}

	typeOfAnimal() {
		console.log('This is a pet.');
	}

}

class Lion extends Animal {

	constructor() {
		super();
		this.lions = [];
	}

	set lion(lionObj) {
		this.lions.push(lionObj);
	}

	get lion() {
		return this.lions;
	}

	typeOfAnimal() {
		console.log('This is a wild animal.');
	}

}

let cat = new Cat();
let lion = new Lion();

// console.log(catOne);
// console.log(catOne.typeOfAnimal());
// console.log(catOne.displayAnimalName());
// console.log(lionOne);
// console.log(lionOne.typeOfAnimal());
// console.log(lionOne.displayAnimalName());

let catOne = {name: 'billy'};
let catTwo = {name: 'mini'};
let catThree = {name: 'miau'};

let lionOne = {name: 'sheru'};
let lionTwo = {name: 'babbar'};

cat.cat = catOne;
cat.cat = catTwo;
lion.lion = lionOne;


lion.animal = lionOne;
lion.animal = lionTwo;

cat.animal = catOne;
cat.animal = catTwo;
cat.animal = catThree;

console.log(lion.lions);
console.log(lion.animals);
console.log(cat.cats);
console.log(cat.animals);