const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
const movieController = require('./controllers/movies/movieController');
const movieRouter = require('./router/movieRouter');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger('dev'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', movieController.index, (req, res) => {
  res.render('index');
});


app.use('/movies', movieRouter);


app.use('*', (req, res) => {
  res.render('404');
});


app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
