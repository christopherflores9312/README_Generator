// Import the required packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description for your project:'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Provide installation instructions:'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide usage information:'
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Provide contribution guidelines:'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provide test instructions:'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your application:',
      choices: ['MIT', 'GPLv3', 'Apache', 'BSD', 'None']
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub username:'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:'
    }
  ];

// Create a function to initialize the app
function init() {
  // Prompt the user for input
  inquirer.prompt(questions).then((answers) => {
    // Generate the content of the README.md file using the generateMarkdown function
    const readmeContent = generateMarkdown(answers);

    // Write the generated content to a new README.md file
    fs.writeFile('./assets/README.md', readmeContent, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Successfully created README.md');
      }
    });
  });
}

// Function call to initialize the app
init();
