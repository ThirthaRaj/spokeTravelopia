require('dotenv').config();
module.exports ={
  "development": {
    "username": process.env.username,
    "password": process.env.password,
    "database": process.env.database,
    "host": process.env.host,
    "port": 5432,
    "dialect": "postgres",
    "logging": false
  },
  "test": {
    "username": "root",
    "password": process.env.pg_password,
    "database": process.env.pg_database,
    "host": process.env.pg_host,
    "port": process.env.pg_port,
    "dialect": "postgres",
    "logging": true
  },
  "production": {
    "username": "root",
    "password": process.env.pg_password,
    "database": process.env.pg_database,
    "host": process.env.pg_host,
    "port": process.env.pg_port,
    "dialect": "postgres",
    "logging": true
  }
};
