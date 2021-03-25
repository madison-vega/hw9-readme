
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('.utils/generateMarkdown');

// the questions that are prompted 
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',


    },
    {
        type: 'input',
        name: 'descript',
        message: 'What is the description of your project?',




    },
    {
        type: 'input',
        name: 'table',
        message: 'What is the table of contents?',




    },
    {
        type: 'input',
        name: 'install',
        message: 'How do you install your project?',




    },
    {

        type: 'input',
        name: 'usage',
        message: 'How do you use your project??',



    },
    {

        type: 'list',
        name: 'license',
        message: 'Pick a license for your project.',
        choices: ['Unlicense', 'MIT', 'GNU GPLv3' ]



    },
    {

        type: 'input',
        name: 'contribute',
        message: 'Who were your contributers?',



    },
    {
        type: 'input',
        name: 'test',
        message: 'How did you test your project?',

    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?',

    },

    {
        type: 'input',
        name: 'email',
        message: 'What is the best contact email for you?',

    },
  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();









