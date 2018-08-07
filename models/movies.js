const db = require('../connection');

module.exports = {
  findAll() {
    return db.many(`
      SELECT *
      FROM movies
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
        SELECT *
        FROM movies
        WHERE id = $1
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