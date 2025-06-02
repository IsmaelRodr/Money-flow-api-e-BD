const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const transacao = sequelize.define('transacao', {
    id_transacao: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    descricao: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    valor: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,
    },
    tipo: {
        type: DataTypes.ENUM('receita', 'despesa'),
        allowNull: false,
    },
    data_transacao: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    id_categoria: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true
    }

  }, {
    tableName: 'transacoes',
    timestamps: false
  });
  
  module.exports = transacao;