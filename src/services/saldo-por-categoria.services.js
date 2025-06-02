const SaldoPorCategoria = require("../models/saldo-por-categoria.model")

exports.listar = async () => {
  return await SaldoPorCategoria.findAll({
    attributes: ['nome_categoria', 'saldo_total']
  });
}