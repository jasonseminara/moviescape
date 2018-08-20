const pgp = require('pg-promise')();

const opts = {
  database: 'moviesscape_db',
};

const db = pgp(opts);

module.exports = db;
