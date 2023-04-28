const { connection } = require('../../config');

const getAllCommentsQuery = (postId) => {
  const sql = {
    text: 'SELECT * FROM comments WHERE post_id = $1 RETURNING',
    values: [postId],
  };
  return connection.query(sql);
};

module.exports = getAllCommentsQuery;
