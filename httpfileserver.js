const http = require('http')
const fs = require('fs')
const portNumber = process.argv[2]
const fileLocation = process.argv[3]

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' }) // content-length unknown
  fs.createReadStream(fileLocation).pipe(res)
})
server.listen(Number(portNumber))
