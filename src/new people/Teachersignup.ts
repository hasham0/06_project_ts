import inquirer from "inquirer";
import Teacher from "../teacher.js";
let teacherList: string[] | number[] | any[] = [];

//dummy data for teacher
const Tec1 = new Teacher(
  "ahsan",
  "khan",
  34,
  "male",
  "MS",
  5,
  2034,
  "programming"
);
const Tec2 = new Teacher(
  "zia",
  "khan",
  35,
  "male",
  "MS",
  20,
  2334,
  "java programming"
);
const Tec3 = new Teacher(
  "adil",
  "altaf",
  28,
  "male",
  "MS",
  8,
  2064,
  "full stack developer"
);
//pushing into teacher list array
const combine = [Tec1, Tec2, Tec3];
combine.forEach((val) => {
  teacherList.push(val);
});

// taking information for the  new teacher
async function teacherSignUp() {
  const teacherInfo = await inquirer.prompt([
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
      name: "qualification",
      type: "input",
      message: "Qualification:",
    },
    {
      name: "experiance",
      type: "number",
      message: "Experiance:",
    },
    {
      name: "id",
      type: "number",
      message: "Id:",
    },
    {
      name: "subject",
      type: "input",
      message: "Specilize Subject:",
    },
  ]);

  let {
    name,
    fatherName,
    age,
    gender,
    qualification,
    experiance,
    id,
    subject,
  } = teacherInfo;
  console.log("-----------------------------------");
  console.log("Teacher Information");
  const NewJoinTeacher = new Teacher(
    name,
    fatherName,
    age,
    gender,
    qualification,
    experiance,
    id,
    subject
  );
  teacherList.push(NewJoinTeacher);
  console.log("-----------------------------------");
  console.table(NewJoinTeacher);
}

// printing all the record of teacher
function TRecord(): void {
  for (let i = 0; i < teacherList.length; i++) {
    console.log("-----------------------------------");
    console.log("Teachers Record");
    console.log("-----------------------------------");
    console.table(teacherList[i]);
  }
}

// finding a specific teacher a/c to his name and id
async function getTeacher() {
  const getTeacher = await inquirer.prompt([
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

  teacherList.forEach((val) => {
    if (val.name === getTeacher.name && val.id === getTeacher.id) {
      console.log("valid Name and id");
      console.log("loading....");
      setTimeout(() => {
        console.log("-----------------------------------");
        console.log("Teacher Information");
        console.log("-----------------------------------");
        console.table(val);
      }, 3000);
      return;
    }
  });
}

export { teacherSignUp, TRecord, getTeacher };
