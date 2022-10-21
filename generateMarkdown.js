function generateMarkdown(questions){
  return `${questions.Project}
  ${questions.description}
  ${questions.TableOfContents}
  ${questions.Installation}
  ${questions.Usage}
  ${questions.License}
  ${questions.Contributing}
  ${questions.Tests}
  ${questions.Questions}
  `
}
module.exports = generateMarkdown
