var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require('../db');

/* GET not-answered page. */
var sql = 'SELECT Questions.is_answered, Questions.title, Questions.question_id, Questions.question_body, Users.user_name FROM Questions INNER JOIN Users ON Users.id = Questions.author_id AND Questions.is_answered = 0';
router.get('/not-answered', function(req, res) {
    db.query(sql, function(err, rows){
        res.render('not-answered-question-page', { title: 'Not Answered', ses: sess.username, questions: rows });
        console.log(sess.username);
    });
});

module.exports = router;