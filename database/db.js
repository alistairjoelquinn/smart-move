const spicedPg = require('spiced-pg');
const db = spicedPg(process.env.DATABASE_URL || `postgres:postgres:postgres@localhost:5432/smartmove`);

module.exports.init = (numArr) => {
    return db.query(
        `SELECT id, name, url
        FROM images
        WHERE id = ANY($1)
        ORDER BY random()
        LIMIT 30`,
        [numArr]
    );
};