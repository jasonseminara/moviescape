module.exports = {
    showAll(req, res) {
      res.render('moviescape/movie-index');
    },
    showOne(req, res) {
      res.render('moviescape/movie-one');
    },
    showBlankForm(req, res) {
      res.render('moviescape/movie-add');
    },
    showEditForm(req, res) {
      res.render('moviescape/movie-dit');
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