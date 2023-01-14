import Human from "./human.js";
//student class
class Student extends Human {
    faculty;
    id;
    constructor(name, father_name, age, Gender, faculty, id) {
        super(name, father_name, age, Gender);
        this.faculty = faculty;
        this.id = id;
        this.faculty = faculty;
        this.id = id;
    }
}
export default Student;
