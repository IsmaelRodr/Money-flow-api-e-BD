const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const transacaoPorCategoria = sequelize.define('transacaoPorCategoria', {
    id_transacao: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
        type: DataTypes.ENUM('receita','despesa'),
        allowNull: false,
    },
    data_transacao: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    nome_categoria: {
        type: DataTypes.STRING(100),
        allowNull: false,
    }

  }, {
    tableName: 'vw_transacoes_por_categoria',
    timestamps: false
  });
  
  module.exports = transacaoPorCategoria;