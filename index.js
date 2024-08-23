// DONE: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
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
        name: 'licence',
        choices: ["MIT", "Apache", "MPL", "BSD", "PD", "CC0", "GPL", "AGPL", "JRL", "Proprietary"],
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

inquirer
    .prompt(questions)
    .then((response) => {
        const title = `# ${response.appName}`
        fs.writeFile("README.md", title, (err) => {
            if (err) throw err;
        });
        fs.appendFile('README.md', "", (err) => {
            if (err) throw err;
        });
        fs.appendFile('README.md', "## Description", (err) => {
            if (err) throw err;
        });
        // console.log(response.email);
        // console.log(response.appName);
        // console.log(response.description);
        // console.log(response.install);
        // console.log(response.usage);
        // console.log(response.licence);
        // console.log(response.contribute);
        // console.log(response.tests);
        console.log("README successfully created");
    })