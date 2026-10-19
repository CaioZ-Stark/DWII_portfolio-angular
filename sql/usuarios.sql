CREATE TABLE usuarios_final (
    id int UNSIGNED not null auto_increment,
    email varchar(120) not null,
    senha_hash char(60) not null,
    criado_em DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    primary key (id),
    Unique key (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;