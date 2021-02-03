// do we need this import below?
const mysql = require('mysql2');

require('dotenv').config();

// Create Connection
const db_config = {
  host: 'cis9cbtgerlk68wl.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_NAME,
  port: '3306'
};

module.exports = db_config;