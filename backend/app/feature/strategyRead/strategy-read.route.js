const router = require('express').Router()
const strategyRead = require('./strategy-read.controller')
const { validateGroup } = require('../../validators/strategy-read.validator')

router.get('/elements/:group?', validateGroup, strategyRead.elements)

module.exports = router
