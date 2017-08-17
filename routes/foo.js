var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require('../db');

/* POST Users. */
var sql = "INSERT INTO Users SET ?";
global.sess;
router.post('/foo', function(req, res, next) {
    var item = {
        user_name: req.body.username
    };
    sess = req.session;
    db.query(sql, item, function(err, rows){
        if (err) {
            console.log("Error inserting : %s ", err);
        }
        if(err){
            res.redirect('/error');
        }else {
            sess.username = req.body.username;
            sess.userId = rows.insertId;
            console.log(rows);
            res.redirect('/list-page');
            console.log(sess.username);
        }
    });
});

module.exports = router;
