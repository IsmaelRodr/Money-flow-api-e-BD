const categoria = require("../models/categoria.model")

exports.listar = async () => {
    return await categoria.findAll();
}

exports.criar = async (nomeCategoria) => {
    const novaCategoria = await categoria.create({
      nome_categoria: nomeCategoria
    });
    return novaCategoria;
}

exports.buscarPorId = async (id) => {
    return await categoria.findByPk(id);
}

exports.atualizarNome = async (id, dadosAtualizados) => {
    const Categoria = await categoria.findByPk(id);
    if (Categoria) {
      await Categoria.update(dadosAtualizados);
      return Categoria;
    }
    return null;
}

exports.deletar = async (id) => {
    const Categoria = await categoria.findByPk(id);
    if (Categoria) {
      await Categoria.destroy();
      return true;
    }
    return false;
}