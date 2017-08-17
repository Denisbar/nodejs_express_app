var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '8169x5it', // Please change to your local db password
    database : 'stackover' // DB name
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;

