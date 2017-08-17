/**
 * Created by denis-barabash on 17.08.17.
 */
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require('../db');

/* POST is-answered/:id page. */
router.post('/is-answered/:id', function(req, res, next) {
    var id = req.params.id;
    db.query("UPDATE Questions SET is_answered = '1' WHERE question_id = '"+id+"'", function(err, rows){
        if (err) {
            console.log("Error inserting : %s ", err);
        }else {
            res.redirect('/list-page');
        }
    });
});

module.exports = router;