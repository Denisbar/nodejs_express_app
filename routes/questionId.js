var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require('../db');

/* GET question/:id page. */
router.get('/question/:id', function(req, res) {
    db.query("SELECT question_id, title, question_body FROM Questions WHERE question_id = '"+req.params.id+"'", function(err, rows){
        db.query("SELECT id, question_id, author_id, text FROM Answers WHERE question_id = '"+req.params.id+"'", function (err, rows2) {
            res.render('question-page', { title: 'Question Page', id: req.params.id, questions: rows, answers:rows2 }); //question id
            console.log(sess.username);
            console.log(req.params.id);
        });
    });
});

module.exports = router;