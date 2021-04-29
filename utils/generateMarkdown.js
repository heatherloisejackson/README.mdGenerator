// Function that returns a license badge string based on which license is passed in
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    break;
    case 'Apache 2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    break;
    case 'Mozilla Public 2.0': '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    break;
    case '...Input other later': 'Insert your badge here';
    break;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# <${answers.project}>

  ## Description
  ${answers.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [How to Contribute](#howtocontribute)
  - [Tests](#tests)

  ## Installation
  ${answers.installation}  
  
  ## Usage
  ${answers.usage}
  
  ## Credits
  ${answers.credits}

  ## License
  renderLicenseBadge()
 
  ## How to Contribute
  ${answers.contributing}

  ## Tests
  ${answers.tests}
`;
}

module.exports = generateMarkdown;
