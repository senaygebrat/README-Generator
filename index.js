// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const fs = require('fs');
const { default: inquirer } = require('inquirer');
const questions = require('inquirer');
const generateMarkdown = require('./generateMarkdown');


questions.prompt([
  {
    type: 'input',
    name: 'Project',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'Description',
    message: 'Please provide a description of your README',
  },
  {
    type: 'checkbox',
    message: 'Would you like a Table of Contents?',
    name: 'stack',
    choices: ['Installation', 'Usage', 'Credits', 'License'],
  },
  {
    type: 'list',
    message: 'What is your preferred method of communication?',
    name: 'contact',
    choices: ['email', 'phone', 'telekinesis'],
  },
])


// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions


//function to initialize app
function init() {
  inquirer.prompt(questions)
  .then((response) => {
    fs.writeFile('./generated-readme.md', generateMarkdown(response))
  }
)
}

// Function call to initialize app
init();



