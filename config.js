var mysql = require('mysql');

var connection = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: 'root',
    database: 'nodejs_sign'
});

connection.connect(function(err){
    if(!err){
        console.log('Database is connected');
    }else{
        console.log('Error while connecting database');
    }
});

module.exports = connection;