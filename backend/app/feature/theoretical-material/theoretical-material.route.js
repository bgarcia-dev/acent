const router = require('express').Router()
const theoricalMaterial = require('./theoretical-material.controller')

router.get('/:theme_id?', theoricalMaterial.item)

module.exports = router
