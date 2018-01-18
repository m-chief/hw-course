const express = require('express')
const app = express()
const x = require('./main3.js')

app.get('/', (req, res) => res.send('hello world!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))

