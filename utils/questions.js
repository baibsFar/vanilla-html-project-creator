export const questionsCli = [
  {
    message: 'Project name',
    name: 'projectName',
    type: 'input',
    default: 'baibs-project'
  },
  {
    message: 'Main html filename',
    name: 'indexHtml',
    type: 'input',
    default: 'index.html'
  },
  {
    message: 'Styles',
    name: 'style',
    type: 'list',
    choices: ['CSS', 'SCSS', 'SASS']
  }
]
