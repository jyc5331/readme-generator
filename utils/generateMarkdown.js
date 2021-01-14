// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let badge = "";
  if (data.license === "Apache") {
    badge =
      "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    let collaboratorInfo;
    if (data.collaborators !== "") {
      collaboratorInfo = data.collaborator + "(https://github.com/)";
    }
  }

  return `# ${data.title} 
${badge}

${data.description}

##Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

## Installation
${data.installation}

##Usage

${data.usage}

Hello developer! Please insert a screenshot or video of your application here and delete this text.

## License:
${data.license}
For more information on licensing, click on the badge at the top of this file. 

##Contributing

${data.username} 

[Github repository:](https://github.com/)

${data.collaborators}

##Tests

##Questions
`;
}
module.exports = generateMarkdown;
