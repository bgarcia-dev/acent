const express = require('express')
const router = express.Router()

const test = require('../feature/test/test.route')
const theoreticalMaterial = require('../feature/theoretical-material/theoretical-material.route')
const strategyRead = require('../feature/strategyRead/strategy-read.route')
const strategyRelationship = require('../feature/strategyRelationship/strategy-relationship.route')
const memoryGameRoutes = require('../feature/memory-game/memory-game.route')
const multipleChoice = require('../feature/multiple-choice/multiple-choice.route')
const picsWords = require('../feature/pics-word/pics-word.route')
const searchWords = require('../feature/search-words/search-words.route')

router.use('/api/words', memoryGameRoutes);
router.use('/api/questions', multipleChoice);
router.use('/api/picsWords', picsWords);
router.use('/api/searchWords', searchWords);
router.use('/test', test)
router.use('/theoretical-material', theoreticalMaterial)
router.use('/strategy-read', strategyRead)
router.use('/strategy-relationship', strategyRelationship)

router.use(async (req, res, next) => {
  return res.status(404).json({ status: false, message: `Route not Found : "${req.url}"` })
})

module.exports = router