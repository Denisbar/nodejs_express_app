var mysql = require('mysql');
var connection = mysql.createPool({
    host     : 'us-cdbr-iron-east-05.cleardb.net',
    user     : 'bcb1b298150b3e',
    password : '2308421a',
    database : 'heroku_d3747e56b77da10'
});

connection.on('error', function(error){
    console.log(error);
});

connection.getConnection(function(err) {
    if (err) throw err;
});

module.exports = connection;