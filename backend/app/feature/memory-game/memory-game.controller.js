const { WordsWithAccents } = require('../../models');

exports.getMemoryWords = async (req, res) => {
  const accentType = req.query.type || 'agudas'; // Por defecto es 'agudas'
  
  try {
    // Agregamos el filtro por 'accent_type'
    const words = await WordsWithAccents.findAll({
      where: { accent_type: accentType }, // Filtro por tipo de acentuación
      order: [['id', 'DESC']],
      limit: 8 // Ajusta según cuántas palabras quieras
    });

    if (!words || words.length === 0) {
      return res.status(404).json({ message: 'No words found for this accent type' });
    }

    // Puedes formatear los datos si es necesario aquí
    res.status(200).json(words);
  } catch (error) {
    console.error('Error fetching words:', error);
    res.status(500).json({ error: 'Error fetching words from WordsWithAccents' });
  }
};

