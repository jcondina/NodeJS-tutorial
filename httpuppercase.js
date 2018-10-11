const http = require('http')
const map = require('through2-map')
const portNumber = process.argv[2]

var server = http.createServer(function (req, res) {
  if (req.method === 'POST') {
    req.pipe(map(function (chunk) {
      return chunk.toString().toUpperCase()
    })).pipe(res)
  } else {
    return res.end('Not a post request')
  }
})
server.listen(Number(portNumber))
