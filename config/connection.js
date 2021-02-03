const mysql = require('mysql');

// Create Connection
const db_config = {
  host: 'cis9cbtgerlk68wl.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user: DB_USER,
  password: DB_PW,
  database: DB_NAME,
  port: '3306'
};

module.exports = db_config;