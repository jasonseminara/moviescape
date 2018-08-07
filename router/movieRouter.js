const express = require('express');
const controller = require('../controllers/movies/movieController');
const views = require('../controllers/movies/viewController');

const movieRouter = express.Router();

movieRouter.get('/:id/edit', controller.getOne,views.showEditForm);
movieRouter.get('/new', views.showBlankForm);


movieRouter.get('/:id', controller.getOne, views.showOne, views.show404)
movieRouter.put('/:id', controller.update, views.handleUpdate)
movieRouter.delete('/:id', controller.destroy, views.handleDestroy);

movieRouter.post('/', controller.create, views.handleCreate);
movieRouter.get('/', controller.index, views.showAll);

module.exports = movieRouter;