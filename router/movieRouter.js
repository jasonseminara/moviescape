const express = require('express');
const controller = require('../controllers/movies/movieController');
const views = require('../controllers/movies/viewController');

const movieRouter = express.Router();

movieRouter.get('/:id/edit', controller.getOne, views.showEditForm);
movieRouter.get('/new', views.showBlankForm);

movieRouter.get('/', controller.index, views.showAll, views.show404)
  .post('/', controller.create, views.handleCreate);

movieRouter.get('/:id', controller.getOne, views.showOne, views.show404)
  .put('/:id', controller.update, views.handleUpdate)
  .delete('/:id', controller.destroy, views.handleDestroy);

module.exports = movieRouter;