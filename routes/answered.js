/**
 * Created by denis-barabash on 17.08.17.
 */
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require('../db');

var sql = 'SELECT Questions.is_answered, Questions.title, Questions.question_id, Questions.question_body, Users.user_name FROM Questions INNER JOIN Users ON Users.id = Questions.author_id AND Questions.is_answered = 1';
/* GET answered page. */
router.get('/answered', function(req, res) {
    db.query(sql, function(err, rows){
        res.render('answered-question-page', { title: 'Answered', ses: sess.username, questions: rows });
        console.log(sess.username);
    });
});

module.exports = router;