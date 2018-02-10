class College {

    createProfessor(type) {

        let professor;

        if (type === "professor") {
            professor = new Professor();
        } 
        else if (type === "associateprofessor") {
            professor = new AssociateProfessor();
        } 
        else if (type === "assistantprofessor") {
            professor = new AssistantProfessor();
        } 

        professor.type = type;

        return professor;

    }

}

class Professor {

    constructor() {
        this.salary = 1200000;
    }

}

class AssociateProfessor {

    constructor() {
        this.salary = 875000;
    }

}

class AssistantProfessor {

    constructor() {
        this.salary = 650000;
    }

}

let professors = [];
let college = new College();

professors.push(college.createProfessor("professor"));
professors.push(college.createProfessor("associateprofessor"));
professors.push(college.createProfessor("assistantprofessor"));

console.log(professors);
