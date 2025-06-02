const categoriaService = require("../services/categoria.services")

exports.buscarCategorias = async (req, res) => {
    const categorias = await categoriaService.listar();
    res.status(200).json(categorias);
} 

exports.cadastrarCategoria = async (req, res) => {
    const categoria = await categoriaService.criar(req.body.nome_categoria);
    res.status(201).json(categoria);
} 

exports.buscarCategoriaPorId = async (req, res) => {
    const categoria = await categoriaService.buscarPorId(req.params.id);
    if (categoria) {
      res.status(200).json(categoria);
    } else {
      res.status(404).json({ mensagem: 'Categoria não encontrada' });
    }
} 

exports.atualizarCategoria = async (req, res) => {
  const categoria = await categoriaService.atualizarNome(req.params.id, req.body);
  if (categoria) {
    res.status(200).json(categoria);
  } else {
    res.status(404).json({ mensagem: 'Categoria não encontrada' });
  }
}

exports.deletarCategoria = async (req, res) => {
  const sucesso = await categoriaService.deletar(req.params.id);
  if (sucesso) {
    res.status(204).send();
  } else {
    res.status(404).json({ mensagem: 'Categoria não encontrada' });
  }
}