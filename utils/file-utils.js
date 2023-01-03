import fs from 'fs'

export function createFile(input = '', output = '') {
  const istream = fs.createReadStream(input)
  const ostream = fs.createWriteStream(output)
  istream.on('data', chunk => ostream.write(chunk))
  istream.on('end', err => {
    if (err) return console.error('Error on creating ' + output)
    console.log(output + ' created.')
    istream.close()
    ostream.close()
  })
}