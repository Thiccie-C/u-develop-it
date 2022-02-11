const mysql = require('mysql2');
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'Cameron',
      // Your MySQL password
      password: 'P@ccraft1618',
      database: 'election'
    });
module.exports = db;