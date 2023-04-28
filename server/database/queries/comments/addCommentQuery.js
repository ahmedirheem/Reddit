const { connection } = require('../../config');

const addCommentQuery = (commentCaption, commenterId, postId) => {
  const sql = {
    text: 'INSERT INTO comments(comment_caption, commenter_id, post_id) VALUES ($1, $2, $3)',
    values: [commentCaption, commenterId, postId],
  };
  return connection.query(sql);
};

module.exports = addCommentQuery;
