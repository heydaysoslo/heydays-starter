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
