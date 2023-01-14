import Human from "./human.js";

class Teacher extends Human {
  constructor(
    name: string,
    father_name: string,
    age: number,
    Gender: string,
    private qualification: string,
    private experiance: number,
    private id: number,
    private subject: string
  ) {
    super(name, father_name, age, Gender);
    this.qualification = qualification;
    this.experiance = experiance;
    this.id = id;
    this.subject = subject;
  }
}

export default Teacher;
