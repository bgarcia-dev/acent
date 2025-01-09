'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'WordsWithAccents',
      [
        { //Agudas, graves, esdrújulas y sobresdrújulas
          word_no_accent: 'facil',
          word_with_accent: 'fácil',
          difficulty_level: 1,
          accent_type: 'agudas',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          word_no_accent: 'carcel',
          word_with_accent: 'cárcel',
          difficulty_level: 1,
          accent_type: 'agudas',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          word_no_accent: 'compas',
          word_with_accent: 'compás',
          difficulty_level: 1,
          accent_type: 'agudas',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          word_no_accent: 'papa',
          word_with_accent: 'papá',
          difficulty_level: 1,
          accent_type: 'agudas',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          word_no_accent: 'sofa',
          word_with_accent: 'sofá',
          difficulty_level: 1,
          accent_type: 'agudas',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          word_no_accent: 'menu',
          word_with_accent: 'menú',
          difficulty_level: 1,
          accent_type: 'agudas',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          word_no_accent: 'ingles',
          word_with_accent: 'inglés',
          difficulty_level: 1,
          accent_type: 'agudas',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          word_no_accent: 'cafe',
          word_with_accent: 'café',
          difficulty_level: 1,
          accent_type: 'agudas',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          word_no_accent: 'mama',
          word_with_accent: 'mamá',
          difficulty_level: 1,
          accent_type: 'agudas',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          word_no_accent: 'bebe',
          word_with_accent: 'bebé',
          difficulty_level: 1,
          accent_type: 'agudas',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          word_no_accent: 'japones',
          word_with_accent: 'japonés',
          difficulty_level: 1,
          accent_type: 'agudas',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          word_no_accent: 'jamon',
          word_with_accent: 'jamón',
          difficulty_level: 1,
          accent_type: 'agudas',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          word_no_accent: 'avion',
          word_with_accent: 'avión',
          difficulty_level: 1,
          accent_type: 'agudas',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          word_no_accent: 'cancion',
          word_with_accent: 'canción',
          difficulty_level: 1,
          accent_type: 'agudas',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          word_no_accent: 'pure',
          word_with_accent: 'puré',
          difficulty_level: 1,
          accent_type: 'agudas',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          word_no_accent: 'raton',
          word_with_accent: 'ratón',
          difficulty_level: 1,
          accent_type: 'agudas',
          created_at: new Date(),
          updated_at: new Date()
        }, 
        { //Tonica y Atonicas
          word_no_accent: 'rapido',
          word_with_accent: 'rápido',
          difficulty_level: 1,
          accent_type: 'tonicas',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          word_no_accent: 'arbol',
          word_with_accent: 'árbol',
          difficulty_level: 1,
          accent_type: 'tonicas',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          word_no_accent: 'lapiz',
          word_with_accent: 'lápiz',
          difficulty_level: 1,
          accent_type: 'tonicas',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          word_no_accent: 'cafe',
          word_with_accent: 'café',
          difficulty_level: 1,
          accent_type: 'tonicas',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          word_no_accent: 'camion',
          word_with_accent: 'camión',
          difficulty_level: 1,
          accent_type: 'tonicas',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          word_no_accent: 'futbol',
          word_with_accent: 'fútbol',
          difficulty_level: 1,
          accent_type: 'tonicas',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          word_no_accent: 'musica',
          word_with_accent: 'música',
          difficulty_level: 1,
          accent_type: 'tonicas',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          word_no_accent: 'escribir',
          word_with_accent: 'escribir',
          difficulty_level: 1,
          accent_type: 'tonicas',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          word_no_accent: 'por',
          word_with_accent: 'por',
          difficulty_level: 1,
          accent_type: 'tonicas',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          word_no_accent: 'con',
          word_with_accent: 'con',
          difficulty_level: 1,
          accent_type: 'tonicas',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          word_no_accent: 'no',
          word_with_accent: 'no',
          difficulty_level: 1,
          accent_type: 'tonicas',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          word_no_accent: 'una',
          word_with_accent: 'una',
          difficulty_level: 1,
          accent_type: 'tonicas',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          word_no_accent: 'su',
          word_with_accent: 'su',
          difficulty_level: 1,
          accent_type: 'tonicas',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          word_no_accent: 'para',
          word_with_accent: 'para',
          difficulty_level: 1,
          accent_type: 'tonicas',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          word_no_accent: 'es',
          word_with_accent: 'es',
          difficulty_level: 1,
          accent_type: 'tonicas',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          word_no_accent: 'al',
          word_with_accent: 'al',
          difficulty_level: 1,
          accent_type: 'tonicas',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          word_no_accent: 'lo',
          word_with_accent: 'lo',
          difficulty_level: 1,
          accent_type: 'tonicas',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          word_no_accent: 'como',
          word_with_accent: 'como',
          difficulty_level: 1,
          accent_type: 'tonicas',
          created_at: new Date(),
          updated_at: new Date()
        },
        { // Palabras tritonicas
          word_no_accent: 'cálculo',
          word_with_accent: 'calculó',
          difficulty_level: 1,
          accent_type: 'tritonicas',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          word_no_accent: 'práctico',
          word_with_accent: 'practicó',
          difficulty_level: 1,
          accent_type: 'tritonicas',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          word_no_accent: 'público',
          word_with_accent: 'publicó',
          difficulty_level: 1,
          accent_type: 'tritonicas',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          word_no_accent: 'género',
          word_with_accent: 'generó',
          difficulty_level: 1,
          accent_type: 'tritonicas',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          word_no_accent: 'depósito',
          word_with_accent: 'depositó',
          difficulty_level: 1,
          accent_type: 'tritonicas',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          word_no_accent: 'continúo',
          word_with_accent: 'continuó',
          difficulty_level: 1,
          accent_type: 'tritonicas',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          word_no_accent: 'específico',
          word_with_accent: 'especificó',
          difficulty_level: 1,
          accent_type: 'tritonicas',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          word_no_accent: 'capítulo',
          word_with_accent: 'capituló',
          difficulty_level: 1,
          accent_type: 'tritonicas',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          word_no_accent: 'título',
          word_with_accent: 'tituló',
          difficulty_level: 1,
          accent_type: 'tritonicas',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          word_no_accent: 'número',
          word_with_accent: 'numeró',
          difficulty_level: 1,
          accent_type: 'tritonicas',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          word_no_accent: 'júbilo',
          word_with_accent: 'jubiló',
          difficulty_level: 1,
          accent_type: 'tritonicas',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          word_no_accent: 'ánimo',
          word_with_accent: 'animó',
          difficulty_level: 1,
          accent_type: 'tritonicas',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          word_no_accent: 'hábito',
          word_with_accent: 'habitó',
          difficulty_level: 1,
          accent_type: 'tritonicas',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          word_no_accent: 'vínculo',
          word_with_accent: 'vinculó',
          difficulty_level: 1,
          accent_type: 'tritonicas',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          word_no_accent: 'tránsito',
          word_with_accent: 'transitó',
          difficulty_level: 1,
          accent_type: 'tritonicas',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          word_no_accent: 'íntimo',
          word_with_accent: 'intimó',
          difficulty_level: 1,
          accent_type: 'tritonicas',
          created_at: new Date(),
          updated_at: new Date()
        },
        
        // Añadir más palabras aquí
  ], {});
},

async down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('WordsWithAccents', null, {});
}
};
