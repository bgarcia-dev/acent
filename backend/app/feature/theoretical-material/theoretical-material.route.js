const router = require('express').Router()
const theoricalMaterial = require('./theoretical-material.controller')
const { validateTheme } = require('../../validators/theoretical-material.validator')

router.get('/get-theme-by-accentuation/:theme', validateTheme, theoricalMaterial.item)

module.exports = router
