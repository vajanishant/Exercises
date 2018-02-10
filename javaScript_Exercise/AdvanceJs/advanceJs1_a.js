class Student {

	constructor() {
		this.students = [];
	}

	set student(studentObj) {
		this.students.push(studentObj);
	}

	get student() {
		return this.students;
	}

	displayNumberOfStudents() {
		console.log(`Number of students are ${this.students.length}`);
	}

}

class Professor extends Student {

	constructor() {
		super();
		this.professors = [];
	}

	set professor(professorObj) {
		this.professors.push(professorObj);
	}

	get professor() {
		return this.professors;
	}

}

let vikram = {name: 'vikram', std: 10};
let vetal = {name: 'vetal', std: 9};
let johny = {name: 'johny', std: 10};
let mikka = {name: 'mikka', std: 10};
let saloni = {name: 'saloni', std: 9};

let hetal = {name: 'hetal', std: 10};
let pankaj = {name: 'pankaj', std: 9};

let prof = new Professor();
let student = new Student();

prof.professor = hetal;
prof.professor = pankaj;

student.student = vikram;
student.student = vetal;
student.student = johny;
student.student = mikka;
student.student = saloni;

prof.student = vikram;

console.log(prof.professor);
console.log(student.students);

prof.displayNumberOfStudents();
// Student