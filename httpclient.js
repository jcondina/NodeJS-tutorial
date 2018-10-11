// fs.writeSync(1, 'kenai') <- imprime kenai en consola
// const fs = require('fs')
// response.on('data', fs.writeSync(1, response)) <- intente usarlo pero no pude

const http = require('http')
const url = process.argv[2]

http.get(url, function (response) {
  response.setEncoding('utf8')
  response.on('data', console.log)
  response.on('error', console.error)
}).on('error', console.error)
