// el path al archivo esta en argv[2]

var fs = require('fs')
var cantDeBarraN = 0
var buf = fs.readFileSync(process.argv[2]).toString()
var splitted = buf.split('\n')

cantDeBarraN = splitted.length - 1
console.log(cantDeBarraN)
