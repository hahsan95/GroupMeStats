const express = require('express');
const router = express.Router();
const environment = require('dotenv').config();

router.get('/', function(req, res) {
    res.send('GET handler for /groupme route');
})

router.post('/', function(req, res) {
    res.send('POST handler for /groupme route.');
});

console.log('process.env.GROUPME_TOKEN: ', process.env.GROUPME_TOKEN)

module.exports = router;