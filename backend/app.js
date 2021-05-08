const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');
const path = require('path');
const axios = require('axios');
const secrets = require('../secrets');

const PORT = 4200;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '..', 'dist')));

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

app.get('/groups', async (req, res, next) => {
  axios.get(`https://api.groupme.com/v3/groups${process.env.API_KEY}`)
  .then((response) => {
    res.send(response.data.response);
  })
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  });
  
