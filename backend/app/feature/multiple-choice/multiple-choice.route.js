const express = require('express')
const { getQuestions } = require('./multiple-choice.controller')

const router = express.Router()

// Este es el endpoint que utilizaremos en el frontend
router.get('/', getQuestions)

module.exports = router