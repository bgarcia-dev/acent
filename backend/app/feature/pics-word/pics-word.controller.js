const { PicsWord } = require('../../models');

exports.getPicsWord = async (req, res) => {
    const accentType = req.query.type;

    try {
      const words = await PicsWord.findAll({
        where: { accent_type: accentType }, //Filtro por tipo de acentuación
        order: [['id', 'DESC']],
        limit: 5
      });
    
      if (!words || words.length === 0) {
        return res.status(404).json({ message: 'No words found for this accent type' });
      }
    
      res.status(200).json(words);
    } catch (error) {
      console.error('Error fetching words:', error);
      res.status(500).json({ error: 'Error fetching words from PicsWord' });
    }
};