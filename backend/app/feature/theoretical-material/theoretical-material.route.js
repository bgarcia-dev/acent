const router = require('express').Router()
const theoricalMaterial = require('./theoretical-material.controller')
const { validateTheme, validateGruoup } = require('../../validators/theoretical-material.validator')

router.get('/get-theme-by-accentuation/:theme', validateTheme, theoricalMaterial.item)

router.get('/get-themes/:group_id', validateGruoup, theoricalMaterial.getThemesByGroups)

module.exports = router
