// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let badge = "";
  if (data.license === "Apache") {
    badge =
      "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (data.license === "GNU GPLv3") {
    badge =
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (data.license === "MIT") {
    badge =
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }

  let collaboratorInfo;
  if (data.collaborators !== "") {
    collaboratorInfo = data.collaborator + "(https://github.com/)";
  }

  return `# ${data.title} 
${badge}

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

## Installation
${data.installation}

## Usage

${data.usage}

Hello developer! Please insert a screenshot or video of your application here and delete this text.

## License:
${data.license}
For more information on licensing, click on the badge at the top of this file. 

## Contributing

Created by: ${data.username} 


In collaboration with: ${data.collaborators}

## Tests

## Questions

You can contact me at: ${data.email}

You can check out my github profile here: [${data.username}](https://github.com/${data.username})
`;
}
module.exports = generateMarkdown;
