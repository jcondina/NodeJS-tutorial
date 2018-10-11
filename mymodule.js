const fs = require('fs')
const path = require('path')

function magicFunction (dirName, fileExt, callback) {
  fs.readdir(dirName, function (err, data) {
    if (err) return callback(err)
    var fileList = data.filter((ext) => path.extname(ext) === '.' + fileExt)
    callback(null, fileList)
  })
}

module.exports = magicFunction
