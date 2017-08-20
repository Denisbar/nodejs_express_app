var express = require('express');
var router = express.Router();
var path = require('path');
var mysql = require('mysql');
var app = require('../app');

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET question page. */
router.get('/question', function(req, res) {
  res.render('question-page', { title: 'Question Page' });
});

module.exports = router;
