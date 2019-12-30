const spicedPg = require('spiced-pg');
const db = spicedPg(process.env.DATABASE_URL || `postgres:postgres:postgres@localhost:5432/smartmove`);

module.exports.init = (numArr) => {
    return db.query(
        `SELECT id, name, url, modal1, modal2, audio1, audio2
        FROM images
        WHERE id = ANY($1)
        ORDER BY random()
        LIMIT 30`,
        [numArr]
    );
};

module.exports.newUser = (first, last, email, passHash) => {
    return db.query(
        `INSERT INTO users (firstname, lastname, email, password)
        VALUES ($1, $2, $3, $4)
        RETURNING firstname, lastname, id`,
        [first, last, email, passHash]
    );
};

module.exports.getPassword = (email) => {
    return db.query(
        `SELECT password, id FROM users 
        WHERE email = $1`,
        [email]
    );
};