const router = require('express').Router()
const strategyRead = require('./strategy-read.controller')

router.get('/elements', strategyRead.elements)

module.exports = router
