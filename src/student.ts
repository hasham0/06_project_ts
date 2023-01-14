import Human from "./human.js";
//student class
class Student extends Human {
  constructor(
    name: string,
    father_name: string,
    age: number,
    Gender: string,
    private faculty: string,
    private id: number
  ) {
    super(name, father_name, age, Gender);
    this.faculty = faculty;
    this.id = id;
  }
}

export default Student;
