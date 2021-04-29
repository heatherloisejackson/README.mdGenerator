// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

// WriteFile function using promises
const writeFileAsync = util.promisify(fs.writeFile);

// Questions for user input
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your first and last name?",
  },
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your professional email address?",
  },
  {
    type: "input",
    name: "project",
    message: "What is the name of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Write a short description of your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "Enter intructions for installation:",
  },
  {
    type: "input",
    name: "usage",
    message: "What does the user need to know about using your repo?",
  },
  {
    type: "input",
    name: "credits",
    message: "List your contributers and credits:",
  },
  {
    type: "input",
    name: "contributing",
    message: "What does the user need to know about contributing to your repo?",
  },
  {
    type: "input",
    name: "tests",
    message: "Provide examples of how to run tests on your application here:",
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: [
      "MIT",
      "Apache 2.0",
      "Mozilla Public 2.0",
      "...Input other later",
    ],
  },
];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// Function that initializes app
const init = () => {
  inquirer
    .prompt(questions)
    .then((answers) => writeFileAsync("README.md", generateMarkdown(answers)))
    .then(() => console.log("Successfully wrote to README.md"))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();

const generateMarkdown = (answers) => {
  return
};
