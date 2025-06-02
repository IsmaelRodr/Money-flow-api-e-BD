const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const usuario = sequelize.define('usuario', {
    id_usuario: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    },
    senha: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    permissao: {
        type: DataTypes.ENUM('admin','usuario'),
        allowNull: true,
    },
    saldo: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: true,
    }

  }, {
    tableName: 'usuarios',
    timestamps: false
  });
  
  module.exports = usuario;