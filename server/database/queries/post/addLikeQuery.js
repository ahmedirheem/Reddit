const { connection } = require('../../config');

const addLikeQuery = ({ newLikes, id }) => {
  const sql = {
    text: 'UPDATE posts SET likes =$1 WHERE id= $2 RETURNING *',
    values: [newLikes, id],
  };
  return connection.query(sql);
};

module.exports = addLikeQuery;
