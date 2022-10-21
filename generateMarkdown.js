function generateMarkdown(questions){
return `
# Project Title
${questions.Project}

## Description
${questions.Description}

## Table of Contents
${questions.TableOfContents}

## Installation
${questions.Installation}

## Usage
${questions.Usage}

## License
${questions.License}

## Contributions
${questions.Contributing}

## Tests
${questions.Tests}

## Questions
${questions.Questions}
`
}

function generateBadges (questions){
  switch(questions.license){
    case "MIT":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    case "Apache 2.0":
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    case "GPL 3.0":
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    case "BSD 3":
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    case "Eclipse 1.0":
      return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)
      `
    }
}

module.exports = generateMarkdown


