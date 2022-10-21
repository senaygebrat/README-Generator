// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');


// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions


const questions = 
[
  {
    type: 'input',
    name: 'Project',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'Description',
    message: 'Please write a description of your README',
  },
  {
    type: 'input',
    name: 'TableOfContents',
    message: 'Please write a description of your Table of Contents',
  },  {
    type: 'input',
    name: 'Installation',
    message: 'Please write a short description of your Installations',
  },  {
    type: 'input',
    name: 'Usage',
    message: 'Please provide a description of your Usage',
  },
  {
    type: 'checkbox',
    name: 'License',
    message: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'GNU v3.0', 'BSD 2-Clause Simplified', 'Boost Software 1.0', 'Creative Commons Zero v1.0', 'Eclipse 2.0', 'Mozilla Public 2.0', 'Unlicense'],
  },  
  {
    type: 'input',
    name: 'Contributing',
    message: 'Please provide a description of your contributions',
  },
  {
    type: 'input',
    name: 'Tests',
    message: 'Please provide a description of your tests',
  },
  {
    type: 'input',
    name: 'Questions',
    message: 'Do you have any questions?',
  },
]


//function to initialize app
function init() {
  inquirer.prompt(questions)
  .then((response) => {
    fs.writeFile('./generated-readme.md', generateMarkdown(response))
    console.log(generateMarkdown(response))
  }
)
}

// Function call to initialize app
init();



