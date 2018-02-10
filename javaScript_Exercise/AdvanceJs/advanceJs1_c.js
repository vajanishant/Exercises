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