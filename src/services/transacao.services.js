const Transacao = require("../models/transacao.model")
const formatDateTime = require('../utils/formatDate');

exports.listar = async () => {
    const transacoes = await Transacao.findAll();

  return transacoes.map(t => ({
    id_transacao: t.id_transacao,
    descricao: t.descricao,
    valor: t.valor,
    tipo: t.tipo,
    data_transacao: formatDateTime(t.data_transacao),
    id_categoria: t.id_categoria,
    id_usuario: t.id_usuario
  }));
}
  
exports.cadastrar = async (descricaoTransacao, valorTransacao, tipoTransacao, dataTransacao, idCategoria, idUsuario) => {
    const novaTransacao = await Transacao.create({
      descricao: descricaoTransacao,
      valor: valorTransacao,
      tipo: tipoTransacao,
      data_transacao: dataTransacao,
      id_categoria: idCategoria,
      id_usuario: idUsuario
    });
  
    return {
      id_transacao: novaTransacao.id_transacao,
      descricao: novaTransacao.descricao,
      valor: novaTransacao.valor,
      tipo: novaTransacao.tipo,
      data_transacao: formatDateTime(novaTransacao.data_transacao),
      id_categoria: novaTransacao.id_categoria,
      id_usuario: novaTransacao.id_usuario
    };
};  

exports.cadastrarComDataAtual = async (descricaoTransacao, valorTransacao, tipoTransacao, idCategoria, idUsuario) => {
    const novaTransacao = await Transacao.create({
      descricao: descricaoTransacao,
      valor: valorTransacao,
      tipo: tipoTransacao,
      data_transacao: new Date(),
      id_categoria: idCategoria,
      id_usuario: idUsuario
    });

    return {
      id_transacao: novaTransacao.id_transacao,
      descricao: novaTransacao.descricao,
      valor: novaTransacao.valor,
      tipo: novaTransacao.tipo,
      data_transacao: formatDateTime(novaTransacao.data_transacao), 
      id_categoria: novaTransacao.id_categoria,
      id_usuario: novaTransacao.id_usuario
    };
};
  
  
exports.buscarPorId = async (id) => {
    const t = await Transacao.findByPk(id);
    if (!t) return null;
  
    return {
      id_transacao: t.id_transacao,
      descricao: t.descricao,
      valor: t.valor,
      tipo: t.tipo,
      data_transacao: formatDateTime(t.data_transacao),
      id_categoria: t.id_categoria,
      id_usuario: t.id_usuario
    };
}
  
  
exports.atualizar = async (id, dadosAtualizados) => {
    const transacao = await Transacao.findByPk(id);
    if (transacao) {
      await transacao.update(dadosAtualizados);
      return {
        id_transacao: transacao.id_transacao,
        descricao: transacao.descricao,
        valor: transacao.valor,
        tipo: transacao.tipo,
        data_transacao: formatDateTime(transacao.data_transacao),
        id_categoria: transacao.id_categoria,
        id_usuario: transacao.id_usuario
      };
    }
    return null;
}
  
  
exports.deletar = async (id) => {
const transacao = await Transacao.findByPk(id);
if (transacao) {
    await transacao.destroy();
    return true;
}
return false;
}