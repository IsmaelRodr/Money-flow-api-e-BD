const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const categoria = sequelize.define('categoria', {
    id_categoria: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nome_categoria: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    },

  }, {
    tableName: 'categorias',
    timestamps: false
  });
  
  module.exports = categoria;