const pgp = require('pg-promise')();

const opts = {
  database: 'moviescape_db',
};

const db = pgp(opts);

module.exports = db;