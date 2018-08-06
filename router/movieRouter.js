const express = require('express');
const controller = require('../controllers/movies/movieController');
const views = require('../controllers/movies/viewController');

const movieRouter = express.Router();

movieRouter.get('/:id/edit', controller.getOne,views.showEditForm);
movieRouter.get('/new', views.showBlankForm);

movieRouter.get('/', controller.index)
movieRouter.post('/', controller.create, views.handleCreate);

movieRouter.get('/:id', controller.getOne, views.showOne, views.show404)
movieRouter.put('/:id', controller.update, views.handleUpdate)
movieRouter.delete('/:id', controller.destroy, views.handleDestroy);

module.exports = movieRouter;