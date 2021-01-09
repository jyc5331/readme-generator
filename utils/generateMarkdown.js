// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let badge = "";
  if (data.license === "Apache") {
    badge =
      "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
  return `# ${data.title} 
${badge}

${data.description}
## License:
${data.license}
`;
}

module.exports = generateMarkdown;
