const { SearchWords } = require('../../models');

exports.getSearchWords = async (req, res) => {
    const accentType = req.query.type || 'agudas'; // Tipo de acentuación (por defecto: 'agudas')

    try {
        const words = await SearchWords.findAll({
            where: { accent_type: accentType },
            order: [['id', 'DESC']],
        });

        if (!words || words.length === 0) {
            return res.status(404).json({ message: 'No words found for this accent type' });
        }

        // Mapea las palabras con sus respectivas pistas
        const formattedWords = words.map(word => ({
            word: word.word,
            clue: word.clue
        }));

        res.status(200).json(formattedWords);
    } catch (error) {
        console.error('Error fetching words:', error);
        res.status(500).json({ error: 'Error fetching words from SearchWords' });
    }
};
