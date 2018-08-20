DROP TABLE IF EXISTS movies;
DROP TABLE IF EXISTS locations;


CREATE TABLE locations (
  id SERIAL PRIMARY KEY,
  name VARCHAR (255)
);

CREATE TABLE movies (
  id SERIAL PRIMARY KEY,
  title VARCHAR (255),
  starring TEXT,
  year INTEGER,
  description TEXT,
  img TEXT,
  locations_id INTEGER REFERENCES locations(id) ON DELETE CASCADE
);
