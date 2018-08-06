const pgp = require('pg-promise')();
const dbConfig = require('../config/dbConfig');

const db = pgp(dbConfig);

module.exports = {
  findAll() {
    return db.many(`
      SELECT movies.id AS movie_id, title, starring, year, description, img, locations.id AS locations_id, name
      FROM movies
      JOIN locations
      ON movies.name = locations.id 
    `);
  },

  findAllTypes() {
    return db.many(`
    SELECT *
    FROM locations
    `);
  },

  findOne(id) {
    return db.one(`
        SELECT movies.id AS movie_id, title, starring, year, description, locations.id AS name_id, name
        FROM movies
        JOIN locations
        ON movies.type = locations.id
        WHERE movies.id = $1
        `, id);
  },

  create(movie) {
    return db.one(`
        INSERT INTO movies (title, starring, year, description, img)
        VALUES ($/title/, $/starring/, $/year/, $/description/, $/img/)
        RETURNING *
        `, movie);
  },

  update(movie) {
    return db.one(`
        UPDATE movies
        SET 
        title = $/title/,
        starring = $/starring/,
        year = $/year/,
        description = $/description/,
        img = $/img/
        WHERE id = $/id/
        RETURNING *
        `, movie);
  },

  destroy(id) {
    return db.one(`
        DELETE FROM movies
        WHERE id = $1
        RETURNING *
        `, id);
  },
};