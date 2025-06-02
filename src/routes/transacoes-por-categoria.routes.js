const express = require('express');
const router = express.Router();
const transacoesPorCategoriasController = require("../controllers/transacoes-por-categoria.controller");
const autenticacao = require('../config/autenticacao');

router.get('/', autenticacao, transacoesPorCategoriasController.buscarTransacoesPorCategorias);

module.exports = router;