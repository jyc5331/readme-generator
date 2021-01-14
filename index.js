// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const genmd = require("./utils/generateMarkdown");

// Create an array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the name of your project");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Provide a description of your project: (Required)",
      validate: (descriptionInput) => {
        if (descriptionInput) {
          return true;
        } else {
          console.log("Please enter a description of your project");
          return false;
        }
      },
    },
    {
      type: "list",
      name: "license",
      message:
        "Select what license you would like to apply to your project: (Required)",
      choices: ["MIT", "Apache", "GNU GPLv3"],
    },
    {
      type: "input",
      name: "installation",
      message:
        "Please describe the installation process for your application (Required)",
      validate: (installationInput) => {
        if (installationInput) {
          return true;
        } else {
          console.log(
            "Please describe the steps needed to install your application"
          );
          return false;
        }
      },
    },
    {
      type: "input",
      name: "usage",
      message:
        "Please describe the steps user will take to use your application (Required)",
      validate: (usageInput) => {
        if (usageInput) {
          return true;
        } else {
          console.log("Please describe how to use your application");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "username",
      message: "Please enter your github username (Required)",
      validate: (usernameInput) => {
        if (usernameInput) {
          return true;
        } else {
          console.log("Please enter your github username");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "collaborators",
      message:
        "Please enter the github username(s) of any collaborators here. If there were none, leave this blank: (Required)",
    },
    //type name message and choices for list
  ]);
};
// Create a function to write README file
// the following is the provided code that wasn't reflected in Modules function writeToFile(fileName, data) {}

//function call for inquirer
promptUser().then((answers) => {
  console.log(answers);
  fs.writeFile("newreadme.md", genmd(answers), (err) => {
    if (err) throw err;
  });
});
