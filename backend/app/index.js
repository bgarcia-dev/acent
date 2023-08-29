const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
const app = express()

const PORT = process.env.PORT || 8080
const route = require('./routes')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use('/v1', route)
app.use((err, req, res, next) => {
  if (err) {
    res.status(500).json({ status: false, message: err.message })
  }
  next()
})

const server = app.listen(PORT, () => {
  console.log(`Servidor iniciado en puerto ${PORT}`)
})

module.exports = server
