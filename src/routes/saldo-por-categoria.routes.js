const express = require('express');
const router = express.Router();
const saldoPorCategoriasController = require("../controllers/saldo-por-categoria.controller");
const autenticacao = require('../config/autenticacao');

router.get('/', autenticacao, saldoPorCategoriasController.buscarSaldoPorCategoria);

module.exports = router;