// First Attempt at connection
/* const mysql = require('mysql2');

require('dotenv').config();

// Create Connection
const db_config = {
  host: 'cis9cbtgerlk68wl.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_NAME,
  port: '3306'
};

module.exports = db_config; */

// Second attempt at connection
const Sequelize = require('sequelize');

require('dotenv').config();

// Create connection to our database
const sequelize = process.env.JAWSDB_URL
? new Sequelize(process.env.JAWSDB_URL)
: new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;