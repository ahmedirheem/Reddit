const { connection } = require('../../config');

const getAllPostsQuery = () => {
  const sql = {
    text: 'SELECT * FROM posts',
  };
  return connection.query(sql);
};

module.exports = getAllPostsQuery;
