CREATE DATABASE IF NOT EXISTS commercedb;

USE commercedb;

CREATE TABLE IF NOT EXISTS produto (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    descricao VARCHAR(255),
    foto LONGTEXT,
    formatoImagem VARCHAR(45),
    dataCriacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- -----------------------------------------------------
-- Data for table 'produto'
-- -----------------------------------------------------
START TRANSACTION;

INSERT INTO produto (`id`, `nome`, `preco`, `descricao`, `foto`, `formatoImagem`) VALUES (1, 'Mesa Jantar', 1200.00, 'Mesa de jantar 4 lugares', '/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJ....', 'image/gif;base64');
INSERT INTO produto (`id`, `nome`, `preco`, `descricao`, `foto`, `formatoImagem`) VALUES (2, 'Cadeira', 'Cadeira de madeira', 134.00, '/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAK....', 'image/gif;base64');
INSERT INTO produto (`id`, `nome`, `preco`, `descricao`, `foto`, `formatoImagem`) VALUES (3, 'Poltrona', 'Poltrona reclinável', 930.00, '/9j/2wBDAAYEBQYFBAYGBQYHBwYIC....', 'image/gif;base64');
INSERT INTO produto (`id`, `nome`, `preco`, `descricao`, `foto`, `formatoImagem`) VALUES (4, 'Luminária', 'Luminária de mesa', 75.00, 'iVBORw0KGgoAAAANSUhEUgAAALQAAADyCAIAAAB....', 'image/gif;base64');
INSERT INTO produto (`id`, `nome`, `preco`, `descricao`, `foto`, `formatoImagem`) VALUES (5, 'Ventilador', 'Ventilador de teto', 399.00, 'iVBORw0KGgoAAAANSUhEUgAAALQAA....', 'image/gif;base64');
INSERT INTO produto (`id`, `nome`, `preco`, `descricao`, `foto`, `formatoImagem`) VALUES (6, 'Cesto/Lixeira', 'Cesto para lixo', 68.00, 'iVBORw0KGgoAAAANSUhEUgAAALQAAADyCAIA....', 'image/gif;base64');

COMMIT;
