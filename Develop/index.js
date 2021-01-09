// TODO: Include packages needed for this application
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
// the following is the provided code that wasn't reflected in Modules function writeToFile(fileName, data) {}
fs.writeFile("newreadme.md", "Sample text", (err) => {
  if (err) throw err;

  console.log("writeFile initialized");
});
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
