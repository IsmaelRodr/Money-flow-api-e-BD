const express = require('express');
const router = express.Router();
const usuarioController = require("../controllers/usuario.controller");
const autenticacao = require('../config/autenticacao');
const verificaAdmin = require('../config/verificaAdmin');

router.get('/', autenticacao, verificaAdmin, usuarioController.buscarUsuarios);
router.get('/:id', autenticacao, verificaAdmin, usuarioController.buscarUsuarioPorId);
router.post('/', usuarioController.cadastrarUsuario);
router.put('/:id', autenticacao, verificaAdmin, usuarioController.atualizarUsuario);
router.delete('/:id', autenticacao, verificaAdmin, usuarioController.deletarUsuario);
router.post('/login', usuarioController.login);


module.exports = router;