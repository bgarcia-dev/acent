'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('PicsWords', [
      {
        word: 'baúl',
        image_1: '../../../frontend/src/assets/4pics1word/baul1.jpg',
        image_2: '../../../frontend/src/assets/4pics1word/baul2.avif',
        image_3: '../../../frontend/src/assets/4pics1word/baul3.jpg',
        image_4: '../../../frontend/src/assets/4pics1word/baul4.jpg',
        clue: 'Objeto, usualmente de madera, usado para conservar objetos.',
        accent_type: 'agudas',
        level: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        word: 'papel',
        image_1: '../../../frontend/src/assets/4pics1word/papel1.jpg',
        image_2: '../../../frontend/src/assets/4pics1word/papel2.jpg',
        image_3: '../../../frontend/src/assets/4pics1word/papel3.avif',
        image_4: '../../../frontend/src/assets/4pics1word/papel4.png',
        clue: 'Delgado y plano, guarda secretos en blanco.',
        accent_type: 'agudas',
        level: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        word: 'león',
        image_1: '../../../frontend/src/assets/4pics1word/leon1.jpg',
        image_2: '../../../frontend/src/assets/4pics1word/leon2.avif',
        image_3: '../../../frontend/src/assets/4pics1word/leon3.jpg',
        image_4: '../../../frontend/src/assets/4pics1word/leon4.png',
        clue: 'Melena dorada, rey de la sabana.',
        accent_type: 'agudas',
        level: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        word: 'maní',
        image_1: '../../../frontend/src/assets/4pics1word/mani1.jpg',
        image_2: '../../../frontend/src/assets/4pics1word/mani2.avif',
        image_3: '../../../frontend/src/assets/4pics1word/mani3.jpg',
        image_4: '../../../frontend/src/assets/4pics1word/mani4.jpg',
        clue: 'Pequeño tesoro en cáscara crujiente.',
        accent_type: 'agudas',
        level: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        word: 'limón',
        image_1: '../../../frontend/src/assets/4pics1word/limon1.png',
        image_2: '../../../frontend/src/assets/4pics1word/limon2.avif',
        image_3: '../../../frontend/src/assets/4pics1word/limon3.jpeg',
        image_4: '../../../frontend/src/assets/4pics1word/limon4.jpg',
        clue: 'Cítrico amarillo, ácido y refrescante.',
        accent_type: 'agudas',
        level: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      // Puedes agregar más palabras aquí
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('PicsWords', null, {});
  }
};
