/**
 * Created by denis-barabash on 17.08.17.
 */
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require('../db');

/* GET ask-question page. */
router.get('/ask-question', function(req, res) {
    res.render('ask-question-page', { title: 'Question Page' });
});

module.exports = router;