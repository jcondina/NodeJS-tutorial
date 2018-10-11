// el path al archivo esta en argv[2]

var fs = require('fs')

fs.readFile(process.argv[2], function (err, data) {
  if (err) throw err
  var cantDeBarraN = data.toString().split('\n').length - 1
  console.log(cantDeBarraN)
})
