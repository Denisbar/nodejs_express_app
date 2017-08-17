var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'us-cdbr-iron-east-05.cleardb.net',
    user     : 'b698be49a04ade',
    password : '8b1add9e', // Please change to your local db password
    database : 'heroku_15f161a99603af0' // DB name
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;

