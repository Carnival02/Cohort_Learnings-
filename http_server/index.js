const express = require('express')
const app = express()
const port = 3000

app.get('/', function(req, res) {
  res.send('Hello World! Mr Harsh Vardhan')
})

app.listen(port)

