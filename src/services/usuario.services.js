const Usuario = require("../models/usuario.model");
require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.listar = async () => {
  return await Usuario.findAll();
}

exports.cadastrar = async (nomeUsuario, emailUsuario, senhaUsuario) => {
  // Conta quantos usuários já existem no banco
  const totalUsuarios = await Usuario.count();

  // Se for o primeiro, define como 'admin'
  const permissao = totalUsuarios === 0 ? 'admin' : 'usuario';

  const novoUsuario = await Usuario.create({
    nome: nomeUsuario,
    email: emailUsuario,
    senha: senhaUsuario,
    permissao
  });

  return novoUsuario;
};

exports.buscarPorId = async (id) => {
    return await Usuario.findByPk(id);
}

exports.buscarPorLogin = async (emailUsuario) => {
  return await Usuario.findOne({where: {email: emailUsuario}})
}

exports.atualizar = async (id, dadosAtualizados) => {
  const usuario = await Usuario.findByPk(id);
  if (usuario) {
    await usuario.update(dadosAtualizados);
    return usuario;
  }
  return null;
}

exports.deletar = async (id) => {
  const usuario = await Usuario.findByPk(id);
  if (usuario) {
    await usuario.destroy();
    return true;
  }
  return false;
}