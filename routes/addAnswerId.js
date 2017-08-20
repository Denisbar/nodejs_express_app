/**
 * Created by denis-barabash on 17.08.17.
 */
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require('../db');

var sql = 'INSERT INTO Answers SET ?';

/* POST add-answer/:id page. */
router.post('/add-answer/:id', function(req, res) {
    var item = {
        text: req.body.answer,
        question_id: req.params.id,
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