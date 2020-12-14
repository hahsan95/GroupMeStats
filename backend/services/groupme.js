const express = require('express');
const router = express.Router();
const axios = require('axios');

const baseUrl = 'https://api.groupme.com/v3';
const token = process.env.GROUPME_TOKEN;

router.get('/', function(req, res) {
    res.send('GET handler for /groupme route');
})

router.post('/', function(req, res) {
    res.send('POST handler for /groupme route.');
});

router.get(`${this.baseUrl}/groups`, (req, res) => {
    console.log(res);
});


var config = {
  method: 'get',
  url: 'https://api.groupme.com/v3/groups?token=8a191dc01d4b0139e91636c88cc7aee6',
  headers: { 
    'Content-Type': 'application/json'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

