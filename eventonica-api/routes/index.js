var pgp = require('pg-promise')(/* options */)
var db = pgp('postgres://postgres:Pass2020!@localhost:5432/eventonica')

db.one('SELECT $1 AS value', 123)
  .then(function (data) {
    console.log('DATA:', data.value)
  })
  .catch(function (error) {
    console.log('ERROR:', error)
  })


var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Our express app is working properly' });
});

module.exports = router;
