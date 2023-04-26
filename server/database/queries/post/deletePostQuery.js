const { connection } = require('../../config');

const deletePostQuery = (id) => {
  console.log(id);
  const sql = {
    text: 'DELETE FROM posts WHERE id=$1 RETURNING *;',
    values: [id],
  };
  return connection.query(sql);
};

module.exports = deletePostQuery;
