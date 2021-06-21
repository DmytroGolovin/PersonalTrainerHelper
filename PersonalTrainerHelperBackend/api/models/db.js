const mysql = require('mysql');
const dbConfig = require('../../db.config.js');

const db = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

//Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('Database Connected...');
});

module.exports = db;