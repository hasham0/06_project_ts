import inquirer from "inquirer";
import Student from "../student.js";
const studentList = [];
//dummy data of student
const Stu1 = new Student("zain", "khan", 23, "male", "Mechanical", 1234);
const Stu2 = new Student("waleed", "amir", 21, "male", "Electrical", 2334);
const Stu3 = new Student("tahir", "zia", 22, "male", "petrolium", 2378);
const combine = [Stu1, Stu2, Stu3];
//pushing into student list array
combine.forEach((val) => {
    studentList.push(val);
});
// taking information for new student
async function studentSignUp() {
    const studentInfo = await inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "Name:",
        },
        {
            name: "fatherName",
            type: "input",
            message: "Father Name:",
        },
        {
            name: "age",
            type: "input",
            message: "Age:",
        },
        {
            name: "gender",
            type: "list",
            choices: ["male", "female"],
            message: "Gender:",
        },
        {
            name: "faculty",
            type: "input",
            message: "faculty:",
        },
        {
            name: "id",
            type: "number",
            message: "Id:",
        },
    ]);
    const { name, fatherName, age, gender, faculty, id } = studentInfo;
    console.log("-----------------------------------");
    console.log("student Information");
    const newJoinStudent = new Student(name, fatherName, age, gender, faculty, id);
    studentList.push(newJoinStudent);
    console.log("-----------------------------------");
    console.table(newJoinStudent);
}
// printing information of all student
function SRecord() {
    for (let i = 0; i < studentList.length; i++) {
        console.log("-----------------------------------");
        console.log("Student Information");
        console.log("-----------------------------------");
        console.table(studentList[i]);
    }
}
// geting information of a specific student
async function getStudent() {
    const getStudent = await inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "Name:",
        },
        {
            name: "id",
            type: "number",
            message: "Id:",
        },
    ]);
    studentList.forEach((val) => {
        if (val.name === getStudent.name && val.id === getStudent.id) {
            console.log("valid Name and id");
            console.log("loading....");
            setTimeout(() => {
                console.log("-----------------------------------");
                console.log("Student Information");
                console.log("-----------------------------------");
                console.table(val);
            }, 3000);
            return;
        }
    });
}
export { studentSignUp, SRecord, getStudent };
