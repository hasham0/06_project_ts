import Human from "./human.js";
class Teacher extends Human {
    qualification;
    experiance;
    id;
    subject;
    constructor(name, father_name, age, Gender, qualification, experiance, id, subject) {
        super(name, father_name, age, Gender);
        this.qualification = qualification;
        this.experiance = experiance;
        this.id = id;
        this.subject = subject;
        this.qualification = qualification;
        this.experiance = experiance;
        this.id = id;
        this.subject = subject;
    }
}
export default Teacher;
