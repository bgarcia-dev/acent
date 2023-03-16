const express = require('express')
const router = express.Router()

const test = require('../feature/test/test.route')
const theoreticalMaterial = require('../feature/theoretical-material/theoretical-material.route');

router.use('/test', test)
router.use('/theoretical-material', theoreticalMaterial)

router.use(async (req, res, next) => {
  return res.status(404).json({ status: false, message: `Route not Found : "${req.url}"` })
})

module.exports = router
