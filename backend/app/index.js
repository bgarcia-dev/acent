const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
const app = express()

const PORT = process.env.PORT || 8080
const route = require('./routes')

app.use(bodyParser.urlencoded({ extended: true }))

const allowedOrigins = [
  'https://frontend-production-e96a.up.railway.app',
  // Otros dominios permitidos
];

app.use(cors({
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Origin not allowed by CORS'));
    }
  },
}));

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
