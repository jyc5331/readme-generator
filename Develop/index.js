// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// Create an array of questions for user input
const promptUser = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
      },
    ])
    .then((answers) => console.log(answers));
};
// Create a function to write README file
// the following is the provided code that wasn't reflected in Modules function writeToFile(fileName, data) {}
//HELP for the following, how do I incorporate md syntax
const readmeContent = "more sample text" + "a second sample text";

//HELP for the following, how do I specify where the file should be created
fs.writeFile("newreadme.md", readmeContent, (err) => {
  if (err) throw err;

  console.log("writeFile initialized");
});
// TODO: Create a function to initialize app HELP what is this for?
function init() {}
// Function call to initialize app
init();

//function call for inquirer
promptUser().then((answers) => console.log(answers));
