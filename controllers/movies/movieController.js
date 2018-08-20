const model = require('../../models/movies.js');

module.exports = {

  index(req, res, next) {
    model.findAll()
      .then((movies) => {
        res.locals.movies = movies;
        next();
      })
      .catch(err => next(err));
  },

  getOne(req, res, next) {
    model.findOne(req.params.id)
      .then((movie) => {
        res.locals.movie = movie;
        next();
      })
      .catch(err => next(err));
  },

  create(req, res, next) {
    model.create(req.body)
      .then((movie) => {
        res.locals.movie = movie;
        next();
      })
      .catch(err => next(err));
  },

  update(req, res, next) {
    req.body.id = req.params.id;
    model.update(req.body)
      .then((movie) => {
        res.locals.movie = movie;
        next();
      })
      .catch(err => next(err));
  },

  destroy(req, res, next) {
    model.destroy(req.params.id)
      .then(() => next())
      .catch(err => next(err));
  },
};
