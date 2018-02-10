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