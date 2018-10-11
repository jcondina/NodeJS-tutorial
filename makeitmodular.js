var myModule = require('./mymodule')

const dirname = process.argv[2]
const fileExt = process.argv[3]

myModule(dirname, fileExt, (err, data) => {
  if (err) return console.error('There was an error:', err)
  data.forEach((item) => console.log(item))
})
