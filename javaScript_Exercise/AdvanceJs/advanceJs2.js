class State {

	constructor(stateName) {
		this.stateName = stateName;
	}

	welcomeToState() {
		console.log(`Welcome to ${this.stateName}.`)
	}

}

class City extends State {

	constructor(cityName, stateName){
		super(stateName);
		this.cityName = cityName;
	}

	displayCityState() {
		console.log(`You are in ${this.cityName} which is located in ${this.stateName}`);
	}

}

let amd = new City('ahmedabad', 'gujarat');
amd.welcomeToState();
amd.displayCityState();
