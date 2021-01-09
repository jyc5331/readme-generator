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
      validate: (githubInput) => {
        if (githubInput) {
          return true;
        } else {
          console.log("Please enter a description of your project");
          return false;
        }
      },
    },
  ]);
};
// Create a function to write README file
// the following is the provided code that wasn't reflected in Modules function writeToFile(fileName, data) {}
//HELP for the following, how do I incorporate md syntax
const readmeContent = "more sample text" + "a second sample text";

//HELP for the following, how do I specify where the file should be created
fs.writeFile("newreadme.md", readmeContent, (err) => {
  if (err) throw err;
});

//function call for inquirer
promptUser().then((answers) => {
  console.log(answers);
});
