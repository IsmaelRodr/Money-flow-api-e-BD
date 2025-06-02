const jwt = require('jsonwebtoken');
require('dotenv').config();

const verificaAdmin = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token)
    return res.status(401).json({ mensagem: "Token obrigatório não fornecido" });

  jwt.verify(token, process.env.CHAVE_SECRETA, (erro, usuario) => {
    if (erro) return res.status(401).json({ mensagem: "Token inválido" });

    if (usuario.permissao !== 'admin') {
      return res.status(403).json({ mensagem: "Acesso negado: apenas administradores" });
    }

    req.user = usuario; // anexa dados ao request para uso posterior
    next();
  });
};

module.exports = verificaAdmin;