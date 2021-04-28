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
      "Academic Free License v3.0",
      "Artistic license 2.0",
      "Creative Commons license family",
      "Do What The F*ck You Want To Public License",
      "Eclipse Public License 2.0",
      "Mozilla Public License 2.0",
      "The Unlicense",
      "*Input my own later",
    ],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

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

const generateHTML = (answers) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${answers.name}</h1>
    <p class="lead">I am from ${answers.location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${answers.github}</li>
      <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;
};
