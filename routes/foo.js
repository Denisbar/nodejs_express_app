var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require('../db');
var SqlString = require('sqlstring');

/* POST Users. */
var sql = "INSERT INTO Users SET ?";

global.sess;

router.post('/foo', function(req, res) {
    var item = {
        user_name: req.body.username
    };

    var sqlSelectUser = "Select user_name FROM Users WHERE user_name = "+SqlString.escape(req.body.username);
    db.query(sqlSelectUser, function(err, row){
        if (err) {
            console.log("Error inserting : %s ", err);
        }
        if(err){
            res.redirect('/error');
        }else {
            if(row && row.length){
                console.log("Data was found");
            }
        }
    });

    sess = req.session;
        db.query(sql, [item], function (err, rows) {
            if (err) {
                console.log("Error inserting : %s ", err);
            }
            if (err) {
                res.redirect('/error');
            } else {
                req.session.u = req.body.username;
                sess.username = req.body.username;
                sess.userId = rows.insertId;
                // console.log(rows);
                res.redirect('/list-page');
                // console.log(sess.username);
            }
        });
});

module.exports = router;
