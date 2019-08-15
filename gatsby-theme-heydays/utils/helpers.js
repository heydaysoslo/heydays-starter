const fs = require('fs')
const path = require('path')

exports.writeFile = (string, fileName = 'output.json') => {
  fs.writeFile(`/log/${fileName}`, JSON.stringify(string, null, 2), function(
    err
  ) {
    if (err) {
      return console.log(err)
    }

    console.log('The file was saved!')
  })
}

exports.getEnv = ({ programDirectory = null }) => {
  let env = null
  if (programDirectory) {
    const oldPath = path.join(programDirectory, '.env')
    const newPath = oldPath.split('/web').join('')

    env = require('dotenv').config({
      path: newPath
    })
  }
  return env.parsed
}
