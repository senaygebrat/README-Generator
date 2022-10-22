function generateMarkdown(questions){
return `
${generateBadges(questions.License)}

# ${questions.Project}

## Description
${questions.Description}

## Table of Contents
  * [License](#license) 
  * [Installation](#installation)
  * [Tests](#tests)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Questions](#questions)

## License 
This project is licensed under the ${questions.License}

## Installation
To install necessary dependencies, run the following command: 

${questions.Installation}

## Tests
To run tests, run the following command:

${questions.Tests}


## Usage
${questions.Usage}

## Contributing
${questions.Contributing}


## Questions
If you have any questions about the repo, open an issue or contact me directly at ${questions.Email}. You can find more of my work at [my Github](https://github.com/${questions.Github}?tab=repositories).
`
}

function generateBadges(License){
  console.log(License)
  switch(License){
    case "MIT":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    case "APACHE 2.0":
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    case "GPL 3.0":
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    case "BSD 3":
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    case "Eclipse 1.0":
      return`[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)
      `
    }
}

module.exports = generateMarkdown


