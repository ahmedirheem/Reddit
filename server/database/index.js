const { connection } = require('./config');
const { getUserByEmailQuery, signupQuery } = require('./queries');

module.exports = {
  connection,
  signupQuery,
  getUserByEmailQuery,
};
