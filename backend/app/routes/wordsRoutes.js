const express = require('express');
const router = express.Router();
const { Word } = require('../models'); // Asegúrate de que este sea el nombre correcto del modelo

// Ruta para obtener palabras aleatorias
router.get('/random', async (req, res) => {
  try {
    const words = await Word.findAll({
      attributes: ['id', 'word_no_accent', 'word_with_accent', 'difficulty_level', 'accent_type']
    });
    res.json(words);
  } catch (error) {
    console.error('Error fetching words:', error);
    res.status(500).json({ error: 'Failed to fetch words' });
  }
});

module.exports = router;
