const http = require('http')
const url = require('url')
const portNumber = process.argv[2]

function isoFormat (date) {
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  }
}

function unixFormat (date) {
  return { unixtime: date.getTime() }
}

var server = http.createServer(function (req, res) {
  let parsed = url.parse(req.url, true)
  let time = new Date(parsed.query.iso)
  let formatedTime
  // console.log(time)
  // console.log(parsed.pathname)

  if (parsed.pathname === '/api/parsetime') {
    formatedTime = isoFormat(time)
    // console.log(formatedTime)
  } else if (parsed.pathname === '/api/unixtime') {
    formatedTime = unixFormat(time)
    // console.log(formatedTime)
  }

  if (formatedTime) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(formatedTime))
  } else {
    res.writeHead(404)
    res.end()
  }
})
server.listen(Number(portNumber))
