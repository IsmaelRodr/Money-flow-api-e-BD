create database if not exists moneyflowdb;

use moneyflowdb;

-- Criação da Tabela de Usuários
CREATE table if not exists usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(100) NOT NULL,
    permissao ENUM('admin', 'usuario') DEFAULT 'usuario' NOT NULL,
    saldo DECIMAL(10,2) DEFAULT 0.00 NOT NULL
);

-- Criação da Tabela de Categorias
CREATE table if not exists categorias (
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    nome_categoria VARCHAR(100) NOT NULL UNIQUE
);

-- Criação da Tabela de Transações
CREATE table if not exists transacoes (
    id_transacao INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(255) NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    tipo ENUM('receita', 'despesa') NOT NULL,
    data_transacao DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    id_categoria INT NOT NULL,
    id_usuario INT NOT NULL,
    CONSTRAINT fk_transacao_categoria FOREIGN KEY (id_categoria) 
  	REFERENCES categorias(id_categoria) ON DELETE CASCADE,
    CONSTRAINT fk_transacao_usuario FOREIGN KEY (id_usuario) 
  	REFERENCES usuarios(id_usuario) ON DELETE CASCADE
);

