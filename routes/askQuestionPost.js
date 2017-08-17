/**
 * Created by denis-barabash on 17.08.17.
 */
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require('../db');

var sql = 'INSERT INTO Questions SET ?';
/* POST ask-question page. */
router.post('/ask-question', function(req, res, next) {
    var item = {
        title: req.body.title,
        question_body: req.body.question,
        author_id: sess.userId
    };
    db.query(sql, item, function(err, rows){
        if (err) {
            console.log("Error inserting : %s ", err);
        }else {
            res.redirect('/list-page');
        }
    });
});

module.exports = router;