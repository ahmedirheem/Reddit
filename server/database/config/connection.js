require('dotenv').config();

const { Pool } = require('pg');

const {
  NODE_ENV, DB_URL, DATABASE_URL, TEST_DB_URL,
} = process.env;

let dbUrl = '';

if (NODE_ENV === 'test') {
  dbUrl = TEST_DB_URL;
} else if (NODE_ENV === 'development') {
  dbUrl = DB_URL;
} else {
  dbUrl = DATABASE_URL;
}

const options = {
  connectionString: dbUrl,
  ssl: NODE_ENV === 'production',
};

const connection = new Pool(options);

module.exports = connection;
