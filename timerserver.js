const net = require('net')
const portNumber = process.argv[2]

var server = net.createServer(function (socket) {
  var d = new Date()
  var customYear = d.getFullYear().toString()
  var customMonth = ('0' + (d.getMonth() + 1)).slice(-2)
  var customDate = ('0' + d.getDate()).slice(-2)
  var customHours = d.getHours().toString()
  var customMinutes = d.getMinutes().toString()
  var customFullDate = customYear + '-' + customMonth + '-' + customDate + ' ' + customHours + ':' + customMinutes
  socket.end(customFullDate + '\n')
})
server.listen(Number(portNumber))
