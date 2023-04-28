const { connection } = require('../../config');

const getPostByIdQuery = ({ id }) => {
  console.log(id);
  const sql = {
    text: `SELECT p.*, c.id AS com_id, c.name AS com_name, c.avatar AS com_avatar, c.description, c.members, u.id As user_id, u.username, u.avatar AS user_avatar, u.email, u.followers 
      FROM posts p
    LEFT JOIN users u
      ON p.poster_id = u.id
    LEFT JOIN communities c
      ON p.community_id = c.id
    WHERE p.id = $1`,
    values: [id],
  };
  return connection.query(sql);
};

module.exports = getPostByIdQuery;
