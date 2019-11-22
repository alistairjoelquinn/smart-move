DROP TABLE IF EXISTS images;

CREATE TABLE images (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL CHECK (name != ''),
    url VARCHAR(255) NOT NULL CHECK (url != ''),
    modal1 VARCHAR(255) NOT NULL CHECK (modal1 != ''),
    modal2 VARCHAR(255) NOT NULL CHECK (modal2 != ''),
    audio VARCHAR(255) NOT NULL CHECK (audio != '')
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(255) NOT NULL CHECK (firstname != ''),
    lastname VARCHAR(255) NOT NULL CHECK (lastname != ''),
    email VARCHAR NOT NULL UNIQUE,
    password VARCHAR NOT NULL CHECK (password != ''),
    date TIMESTAMPTZ DEFAULT Now()
);

SELECT * FROM images;