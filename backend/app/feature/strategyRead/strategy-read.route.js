const router = require('express').Router()
const strategyRead = require('./strategy-read.controller')
const { validateGroup } = require('../../validators/strategy-read.validator')

router.get('/elements/:group?', validateGroup, strategyRead.elements)
router.get('/test/elements/:group?', validateGroup, strategyRead.test)

module.exports = router
