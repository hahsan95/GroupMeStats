const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');
const path = require('path');
const PORT = 4200;

const groupme = require('./services/groupme');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '..', 'dist')));
app.use('/groupme', groupme);

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, X-OUID, Authorization'
  );

  req.headers = {
    Authorization: req.headers.authorization,
    'Content-Type': req.headers['content-type'],
    'X-OUID': req.headers['x-ouid'],
  };

  next();
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  });
  
