const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(require('./src/router/post.routes.js'))

app.listen(3000, () => {
  console.log('Server start on http://localhost:3000');
});