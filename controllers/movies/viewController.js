module.exports = {

  showAll(req, res) {
    res.render('index');
  },

  showOne(req, res) {
    res.render('movies/movie-one');
  },

  showBlankForm(req, res) {
    res.render('movies/movie-add');
  },

  showEditForm(req, res) {
    res.render('movies/movie-edit');
  },

  handleCreate(req, res) {
    res.redirect('/movies');
  },

  handleUpdate(req, res) {
    res.redirect(`/movies/${req.params.id}`);
  },

  handleDestroy(req, res) {
    res.redirect('/movies');
  },

  show404(err, req, res, next) {
    console.log({ err });
    res.render('404');
  },
};
