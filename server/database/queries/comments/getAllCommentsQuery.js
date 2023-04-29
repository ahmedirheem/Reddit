const { connection } = require('../../config');

const getAllCommentsQuery = (postId) => {
  const sql = {
    text: 'SELECT c.*, u.* FROM comments c LEFT JOIN users u ON c.commenter_id = u.id WHERE post_id = $1',
    values: [postId],
  };
  return connection.query(sql);
};

module.exports = getAllCommentsQuery;
