const express = require('express')
const router = express.Router()

const test = require('../feature/test/test.route')

router.use('/test', test)


router.use(async (req, res, next) => {
  return res.status(404).json({ status: false, message: `Route not Found : "${req.url}"` });
})

module.exports = router
