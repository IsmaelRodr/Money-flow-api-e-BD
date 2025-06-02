const transacoesPorCategoriaService = require("../services/transacoes-por-categoria.services")

exports.buscarTransacoesPorCategorias = async (req, res) => {
    const transacoesPorCategorias = await transacoesPorCategoriaService.listar();
    const formatado = transacoesPorCategorias.map(t => ({
        ...t.dataValues,
        data_transacao: new Date(t.dataValues.data_transacao)
          .toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })  // GMT-3
      }));
    
    res.status(200).json(formatado);
}