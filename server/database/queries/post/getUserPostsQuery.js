const { connection } = require('../../config');

const getUserPostsQuery = (posterId) => {
  const sql = {
    text: 'SELECT * FROM posts WHERE poster_id = $1',
    values: [posterId],
  };
  return connection.query(sql);
};

module.exports = getUserPostsQuery;
