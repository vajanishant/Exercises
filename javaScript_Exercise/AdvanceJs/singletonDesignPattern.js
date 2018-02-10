class SingletonDemo {
    
    constructor() {
        this.instance;
    }

    static createInstance() {
        let object = new Object("I am the instance");
        console.log('new1');
        return object;
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = SingletonDemo.createInstance();
        }
        return this.instance;
    }

}

let newObj = SingletonDemo.getInstance();
let newObj2 = SingletonDemo.getInstance();
console.log(newObj2 === newObj);
