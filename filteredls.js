const fs = require('fs')
const path = require('path')

const folder = process.argv[2]
const extFilter = '.' + process.argv[3]

fs.readdir(folder, function (err, list) {
  if (err) return console.error(err)
  var fileList = list.filter((ext) => path.extname(ext) === extFilter)
  // list.forEach((item) => console.log(path.extname(item)))
  // console.log(extFilter)
  fileList.forEach((item) => console.log(item))
})
