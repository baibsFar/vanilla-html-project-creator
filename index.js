import fs from 'fs'
import inquirer from 'inquirer'
import { questionsCli } from './utils/questions.js'
import { createFile } from './utils/file-utils.js'
import path from 'path'

async function main() {
  const { indexHtml, style, projectName } = await inquirer.prompt(questionsCli, {})
  
  if (!process.env.BAIBS_CREA) return console.log('You must add the project path to your environment variables $PATH')
  const basePathCreator = path.resolve(process.env.BAIBS_CREA)
  const basePathProject = path.resolve(projectName)
  if (!fs.existsSync(basePathProject)) fs.mkdirSync(basePathProject)

  // Creating html file
  createFile(
    path.join(basePathCreator, './examples/index.html'),
    `${basePathProject}/${indexHtml}`
  )

  // Creating style file
  const styleDir = style.toString().toLowerCase()
  if (!fs.existsSync(`${basePathProject}/src`)) fs.mkdirSync(`${basePathProject}/src`)
  if (!fs.existsSync(`${basePathProject}/src/${styleDir}`)) fs.mkdirSync(`${basePathProject}/src/${styleDir}`)
  if (style.toString() === 'SCSS' || style.toString() === 'SASS') {
    if (!fs.existsSync(`${basePathProject}/src/${styleDir}/partials`)) fs.mkdirSync(`${basePathProject}/src/${styleDir}/partials`)
  }
  const stylePath = `${styleDir}/style.${styleDir}`
  createFile(
    path.join(basePathCreator, `./examples/${styleDir}/style.${styleDir}`), 
    `${basePathProject}/src/${stylePath}`
  )

  // Creating js file
  if (!fs.existsSync(`${basePathProject}/src/js`)) fs.mkdirSync(`${basePathProject}/src/js`)
  createFile(
    path.join(basePathCreator, './examples/js/main.js'),
    `${basePathProject}/src/js/main.js`
  )
}

main()