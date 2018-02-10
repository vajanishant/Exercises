class Computer {
	constructor(brand ='', ram='', processor='', hardDisk='') {
		this.brand = brand;
		this.ram = ram;
		this.processor = processor;
		this.hardDisk = hardDisk;
	}
}

class CloneComputer {

	constructor(objToClone) {
		this.objToClone = objToClone;
	}

	clone() {
		let cloneObj = new Computer();

		this.cloneObj.brand = this.objToClone.brand;
		// this.cloneObj.ram = this.objToClone.ram;
		// this.cloneObj.processor = this.objToClone.processor;
		// this.cloneObj.hardDisk = this.cloneObj.hardDisk;
		console.log(this.cloneObj.brand);
		return cloneObj;
	}
}

let compObj = new Computer('Apple', '16Gb', 'intel i7', '1Tb');
let cloneComp = new CloneComputer(compObj);
console.log(compObj);
console.log(cloneComp.clone());