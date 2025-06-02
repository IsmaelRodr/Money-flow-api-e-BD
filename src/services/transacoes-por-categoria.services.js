const TransacaoPorCategoria = require("../models/transacoes-por-categoria.model")

exports.listar = async () => {
  return await TransacaoPorCategoria.findAll({
    attributes: ['id_transacao', 'descricao','valor', 'tipo', 'data_transacao', 'nome_categoria']
  });
}