const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USUARIO, process.env.DB_SENHA, {
  host: 'localhost',
  dialect: 'mysql',
  timezone: "-03:00"
});

module.exports = sequelize;