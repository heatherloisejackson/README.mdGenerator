// Function that returns a license badge string based on which license is passed in
function renderLicenseBadge(license) {
  let badge = ''
  switch (license) {
    case 'MIT': badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    break;
    case 'Apache 2.0': badge = '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    break;
    case 'Mozilla Public 2.0': badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    break;
    case '...Input other later': badge = 'Insert your badge here';
    break;
  };
  return badge;
};



// Function that generates markdown for README
function generateMarkdown(answers) {
  const badge = renderLicenseBadge(answers.license);
  return `# ${answers.project}

  ## Description
  ${answers.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [How to Contribute](#howtocontribute)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${answers.installation} 
  
  ## Usage
  ${answers.usage}
  
  ## Credits
  ${answers.credits}

  ## License
  ${badge}
 
  ## How to Contribute
  ${answers.contributing}

  ## Tests
  ${answers.tests}

  ## Questions
  If you have any questions about this project or repository, contact me using one of the following methods:
    - Github: [${answers.name}](https://github.com/${answers.username})
    - Email: [${answers.email}](mailto:${answers.email}?subject=Inquiry%20about%20${answers.project})
`;
}

module.exports = generateMarkdown;
