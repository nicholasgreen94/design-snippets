const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true, }))
app.use(bodyParser.json())
app.use(logger('dev'))

const PORT = process.env.PORT || 3001
// Send Request
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'))
})

app.listen(PORT, () => {
  console.log(`Now connected on port ${PORT}`)
})
