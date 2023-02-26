const router = require('express').Router()
const test = require('./test.controller')

router.get('/', test.test)

module.exports = router
