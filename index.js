const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown.js');

const questions = 
[
  {
    type: 'input',
    name: 'Github',
    message: "What is your Github username?"
},
{
  type: 'input',
  name: 'Email',
  message: "What is your email address?"
},
  {
    type: 'input',
    name: 'Project',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'Description',
    message: 'Please write a description of your project',
  },  
  {
    type: 'list',
    name: 'License',
    message: "What type of License?",
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'Eclipse 1.0', 'none'],
  },
  {
    type: 'input',
    name: 'Installation',
    message: 'What command should be run to install dependencies?',
  },
  {
    type: 'input',
    name: 'Tests',
    message: 'What command should be run to run tests?',
  },  
  {
    type: 'input',
    name: 'Usage',
    message: 'What should the user know about using the repo?',
  },  
  {
    type: 'input',
    name: 'Contributing',
    message: 'What does the user need to know about contributing to the repo?',
  },
  
]

//function to initialize app
function init() {
  inquirer.prompt(questions)
  .then((response) => {
    fs.writeFile('./generated-readme.md', generateMarkdown(response),(err) => {
      err ? console.log(err) : console.log('Success!')
    }
    )
    console.log(generateMarkdown(response))
  })
}

// Function call to initialize app
init();



