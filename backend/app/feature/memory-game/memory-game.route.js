const express = require('express')
const { getMemoryWords } = require('./memory-game.controller')

const router = express.Router()

// Este es el endpoint que utilizaremos en el frontend
router.get('/', getMemoryWords)

module.exports = router
