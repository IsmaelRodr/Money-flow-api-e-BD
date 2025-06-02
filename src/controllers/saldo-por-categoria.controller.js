const saldoPorCategoriaService = require("../services/saldo-por-categoria.services")

exports.buscarSaldoPorCategoria = async (req, res) => {
    const saldoPorCategorias = await saldoPorCategoriaService.listar();
    res.status(200).json(saldoPorCategorias);
}