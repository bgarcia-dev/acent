const express = require('express')
const { getSearchWords } = require('./search-words.controller')

const router = express.Router()

// Este es el endpoint que utilizaremos en el frontend
router.get('/', getSearchWords)

module.exports = router