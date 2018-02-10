class Vehicle {

	constructor(company, topSpeed) {
		this.company = company;
		this.topSpeed = topSpeed;
	}

	displayComapany() {
		console.log(`This car is a ${this.company} car.`);
	}
	
	static compareTopSpeed(carOneSpeed, carTwospeed) {
		return (carOneSpeed.topSpeed - carTwospeed.topSpeed);
	}

}

class Car extends Vehicle {

	constructor(company, topSpeed, carModel) {
		super(company, topSpeed);
		this.carModel =carModel;
	}

	displayCarDetails() {
		console.log(`This is ${this.carModel} and top speed is ${this.topSpeed}`);
	}

}

let verna = new Car('Hyundai', '220', 'Verna');
verna.displayComapany();
verna.displayCarDetails();


let audi = new Car('Audi', '300', 'A4');
audi.displayComapany();
audi.displayCarDetails();


let cars = [new Car('Audi', '300', 'A4'), new Car('Hyundai', '220', 'Verna')];

cars.sort(Car.compareTopSpeed);
console.log(cars);

class Animal {

	constructor(name, typeOfFood) {
		this.name = name;
		this.typeOfFood = typeOfFood;
	}

	displayAnimalName() {
		console.log(`This animal's name is ${this.name}.`);
	}

}	

class Cat extends Animal {

	typeOfAnimal() {
		console.log('This is a pet.');
	}

}

class Lion extends Animal {

	typeOfAnimal() {
		console.log('This is a wild animal.');
	}

}

let catOne = new Cat('biladi','vegetarian');
let lionOne = new Lion('sinhh','non-vegetarian');

console.log(catOne);
console.log(catOne.typeOfAnimal());
console.log(catOne.displayAnimalName());
console.log(lionOne);
console.log(lionOne.typeOfAnimal());
console.log(lionOne.displayAnimalName());

class Mammals {
	
	set types(type) {
		this.type = type;
	}
	
	displayType() {
		console.log('whale is ' + this.type + ' mammals.');
	}

}

class WaterAnimals extends Mammals {

	checkType() {
		if(this.type == 'Sea') {
			this.waterMammals = true;
		}
		else {
			this.waterMammals = false;
		}
	}

}


class Whale extends WaterAnimals {
	
	set names(name) {
		this.name = name;
	}
	
	eat() {
		if(this.waterMammals) {
			this.canEat = 'sea food';
		}
	}

	displayWhaleDeatails() {
		console.log(`This is a whale whose name is ${this.name} and she is a ${this.type} mammals and she can eat ${this.canEat}`);
	}

}

let whaleOne = new Whale();
whaleOne.types = 'Sea';
whaleOne.displayType();
whaleOne.names = 'Rubby';
whaleOne.checkType();
whaleOne.eat();
whaleOne.displayWhaleDeatails();

function Company(name, noOfEmployees) {}

Company.prototype.constructor = function() {
	this.name = name;
	this.noOfEmployees = noOfEmployees;
}

Company.prototype.display = function() {
	console.log(`${name} has ${noOfEmployees}`);
}

let companyOne = new Company('Rapidops',100);
companyOne.display();