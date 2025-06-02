const express = require('express');
const router = express.Router();
const categoriaController = require("../controllers/categoria.controller");
const autenticacao = require('../config/autenticacao');
const verificaAdmin = require('../config/verificaAdmin');

router.get('/', autenticacao, categoriaController.buscarCategorias);
router.get('/:id', autenticacao, categoriaController.buscarCategoriaPorId);
router.post('/', autenticacao, verificaAdmin, categoriaController.cadastrarCategoria);
router.put('/:id', autenticacao, verificaAdmin, categoriaController.atualizarCategoria);
router.delete('/:id', autenticacao, verificaAdmin, categoriaController.deletarCategoria);

module.exports = router;