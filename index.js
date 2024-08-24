// DONE: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// DONE: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the name of your application?',
        name: 'appName',
    },
    {
        type: 'input',
        message: 'Describe your application in two or three sentences.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'How do you install the application?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'How do you use the application?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'What kind of licence do you want for your application?',
        name: 'license',
        choices: ["Apache", "Boost", "BSD 3-Clause", "BSD 2-Clause", "CC0", "Eclipse", "ISC", "MIT", "Mozilla", "WTFPL", "No License"],
    },
    {
        type: 'input',
        message: 'How can others contribute to the application?',
        name: 'contribute',
    },
    {
        type: 'input',
        message: 'How do you test the application?',
        name: 'tests',
    },
];

// DONE: Create a function to write README file
function writeToFile(response) {
    generateMarkdown(response);
};

// DONE: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        writeToFile(response);
    })
}

// Function call to initialize app
init();
