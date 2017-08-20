/**
 * Created by denis-barabash on 17.08.17.
 */
/* GET list-page. */
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require('../db');

var sql = 'SELECT Questions.is_answered, Questions.title, Questions.question_id, Questions.question_body, Users.user_name FROM Questions INNER JOIN Users ON Users.id = Questions.author_id';
router.get('/list-page', function(req, res) {
    db.query(sql, function(err, rows){
        res.render('list-page', { title: 'List Page', ses: req.session.u, questions: rows });
        console.log(sess.username);
    });
});

module.exports = router;