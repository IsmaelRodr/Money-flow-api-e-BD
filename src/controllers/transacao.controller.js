const transacaoService = require("../services/transacao.services")

exports.buscarTransacoes = async (req, res) => {
    const transacoes = await transacaoService.listar();
    res.status(200).json(transacoes);
}

exports.cadastrarTransacao = async (req, res) => {
    const transacao = await transacaoService.cadastrar(req.body.descricao, req.body.valor, req.body.tipo, req.body.data_transacao, req.body.id_categoria, req.body.id_usuario);
    res.status(201).json(transacao);
}

exports.cadastrarTransacaoDataAtual = async (req, res) => {
    const transacao = await transacaoService.cadastrarComDataAtual(req.body.descricao, req.body.valor, req.body.tipo, req.body.id_categoria, req.body.id_usuario);
    res.status(201).json(transacao);
}

exports.buscarTransacaoPorId = async (req, res) => {
    const transacao = await transacaoService.buscarPorId(req.params.id);
    if (transacao) {
      res.status(200).json(transacao);
    } else {
      res.status(404).json({ mensagem: 'Transação não encontrada' });
    }
}

exports.atualizarTransacao = async (req, res) => {
  const transacao = await transacaoService.atualizar(req.params.id, req.body);
  if (transacao) {
    res.status(200).json(transacao);
  } else {
    res.status(404).json({ mensagem: 'Transação não encontrada' });
  }
}

exports.deletarTransacao = async (req, res) => {
  const sucesso = await transacaoService.deletar(req.params.id);
  if (sucesso) {
    res.status(204).send();
  } else {
    res.status(404).json({ mensagem: 'Transação não encontrada' });
  }
}