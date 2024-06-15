// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mensajeria', 'tu_usuario', 'tu_contraseña', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
