const http = require('http')
const urls = [process.argv[2], process.argv[3], process.argv[4]]
const bl = require('bl')
const buff = []
var timesListened = 0

function printBuff () {
  for (var i = 0; i < buff.length; i++) {
    console.log(buff[i])
  }
}

function asyncListener (listenPosition) {
  http.get(urls[listenPosition], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) return console.error(err)
      buff[listenPosition] = data.toString()
      timesListened++

      if (timesListened === 3) {
        printBuff()
      }
    }))
  })
}

for (var i = 0; i < 3; i++) {
  asyncListener(i)
}
