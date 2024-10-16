const express = require('express')
const { getPicsWord } = require('./pics-word.controller')

const router = express.Router()

// Este es el endpoint que utilizaremos en el frontend
router.get('/', getPicsWord)

module.exports = router