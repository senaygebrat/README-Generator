function generateMarkdown(questions){
  return `
  Project Title
  ${questions.Project}
  Description
  ${questions.Description}
  Table of Contents
  ${questions.TableOfContents}
  Installation
  ${questions.Installation}
  Usage
  ${questions.Usage}
  License
  ${questions.License}
  Contributions
  ${questions.Contributing}
  Tests
  ${questions.Tests}
  Questions
  ${questions.Questions}
  `
}
module.exports = generateMarkdown


