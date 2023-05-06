const router = require('express').Router()
const strategyRelationship = require('./stategy-retaltionship.controller')
const { validateGroup } = require('../../validators/strategy-relationship.validator')

router.get('/elements/:group?', validateGroup, strategyRelationship.elements)

module.exports = router
