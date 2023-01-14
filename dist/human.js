// Human class
class Human {
    name;
    father_name;
    age;
    Gender;
    constructor(name, father_name, age, Gender) {
        this.name = name;
        this.father_name = father_name;
        this.age = age;
        this.Gender = Gender;
        (this.name = name),
            (this.father_name = father_name),
            (this.age = age),
            (this.Gender = Gender);
    }
}
export default Human;
