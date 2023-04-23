const { connection } = require('../../config');

const addDisLikeQuery = ({ newDisLikes, id }) => {
  const sql = {
    text: 'UPDATE posts SET dislikes =$1 WHERE id= $2 RETURNING *',
    values: [newDisLikes, id],
  };
  return connection.query(sql);
};

module.exports = addDisLikeQuery;
