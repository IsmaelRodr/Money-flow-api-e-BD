const express = require('express');
const router = express.Router();
const transacaoController = require("../controllers/transacao.controller");
const autenticacao = require('../config/autenticacao');

router.get('/', autenticacao, transacaoController.buscarTransacoes);
router.get('/:id', autenticacao, transacaoController.buscarTransacaoPorId);
router.post('/', autenticacao, transacaoController.cadastrarTransacao);
router.post('/now', autenticacao, transacaoController.cadastrarTransacaoDataAtual);
router.put('/:id', autenticacao, transacaoController.atualizarTransacao);
router.delete('/:id', autenticacao, transacaoController.deletarTransacao);

module.exports = router;