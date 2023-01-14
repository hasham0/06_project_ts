#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import {
  teacherSignUp,
  TRecord,
  getTeacher,
} from "./new people/Teachersignup.js";
import {
  studentSignUp,
  SRecord,
  getStudent,
} from "./new people/StudentSignUp.js";
// asking user what he want
enum University {
  Uniname = "Indus Unversity",
  address = "National Stadium",
  branch = "Main Campus",
}

const check = `
  Universty Name:     ${chalk.red(University.Uniname)}
  University Address: ${chalk.red(University.address)}
  University Branch:  ${chalk.red(University.branch)}`;
console.log(check);
console.log("\n");
setTimeout(() => {
  async function userOptions() {
    const usrInput = await inquirer.prompt([
      {
        name: "UserInput",
        type: "list",
        choices: [
          "Add new Teacher",
          "Find a Teacher",
          "View all Teacher record",
          "Add new Student",
          "Find a student",
          "View All Student record",
          "Exit",
        ],
        message: "Select your Option:",
      },
    ]);

    // making options

    if (usrInput.UserInput === "Add new Teacher") {
      await teacherSignUp();
    } else if (usrInput.UserInput === "Find a Teacher") {
      getTeacher();
    } else if (usrInput.UserInput === "View all Teacher record") {
      TRecord();
    } else if (usrInput.UserInput === "Add new Student") {
      await studentSignUp();
    } else if (usrInput.UserInput === "Find a student") {
      getStudent();
    } else if (usrInput.UserInput === "View All Student record") {
      SRecord();
    } else {
      console.log("have a nice day");
    }
  }
  userOptions();
}, 2000);
