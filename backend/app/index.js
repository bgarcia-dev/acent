const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const wordsRoutes = require('./routes/wordsRoutes');
const memoryGameRoutes = require('./feature/memory-game/memory-game.route');
const multipleChoice = require('./feature/multiple-choice/multiple-choice.route');
const picsWords = require('./feature/pics-word/pics-word.route')
const searchWords = require('./feature/search-words/search-words.route')
require('dotenv').config();

const app = express();

// Asegurarse de usar cors correctamente antes de las rutas
app.use(cors({
  origin: '*' // Esto permite cualquier origen, pero puedes limitarlo a un dominio específico
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const { sequelize } = require('./models');

sequelize.authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

sequelize.sync({ force: false, alter: false })
  .then(() => {
    console.log('All models were synchronized successfully.');
  })
  .catch(err => {
    console.error('Error synchronizing models:', err);
  });

// Definir la ruta para las palabras
app.use('/api/words', memoryGameRoutes);

app.use('/api/questions', multipleChoice);

app.use('/api/picsWords', picsWords);

app.use('/api/searchWords', searchWords);

const PORT = process.env.PORT || 3000;

const route = require('./routes');
app.use('/v1', route);

// Manejar errores
app.use((err, req, res, next) => {
  if (err) {
    res.status(500).json({ status: false, message: err.message });
  }
  next();
});

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor iniciado en puerto ${PORT}`);
});

module.exports = server;
