// Import the inquirer package for prompting user input
const inquirer = require('inquirer');
// Import the fs (file system) module for writing to files
const fs = require('fs');
// Import the generateMarkdown function from the generateMarkdown module
const generateMarkdown = require('./utils/generateMarkdown');
// Define an array of questions to be prompted to the user
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

// Define the init function to initialize the app
function init() {
  // Use inquirer to prompt the user for input based on the defined questions
  inquirer.prompt(questions).then((answers) => {
    // Generate the content of the README.md file using the generateMarkdown function
    const readmeContent = generateMarkdown(answers);

    // Write the generated content to a new README.md file in the assets directory
    fs.writeFile('./assets/README.md', readmeContent, (err) => {
      if (err) {
        // Log any errors that occurred during file writing
        console.log(err);
      } else {
        // Log a success message indicating that the README.md file was created
        console.log('Successfully created README.md');
      }
    });
  });
}

// Call the init function to initialize and run the app
init();
