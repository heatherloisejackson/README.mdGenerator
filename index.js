// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// WriteFile function using promises
const writeFileAsync = util.promisify(fs.writeFile);

// Questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();