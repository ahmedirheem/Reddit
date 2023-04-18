const { connection } = require('../../config');

const signupQuery = ({ username, email, password }) => {
  const sql = {
    text: 'INSERT INTO users(name, email, password) VALUES($1, $2, $3)',
    values: [username, email, password],
  };

  return connection.query(sql);
};

module.exports = signupQuery;
