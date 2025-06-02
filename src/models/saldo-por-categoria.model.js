const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const saldoPorCategoria = sequelize.define('saldoPorCategoria', {
    nome_categoria: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    saldo_total: {
        type: DataTypes.DECIMAL(32,2),
        allowNull: true,
    },
  }, {
    tableName: 'vw_saldo_por_categoria',
    timestamps: false
  });
  
module.exports = saldoPorCategoria;