const { connection } = require('../../config');

const getUserPostsQuery = (posterId) => {
  const sql = {
    text: `
      SELECT p.*, c.id AS com_id, c.name, c.avatar, c.description, c.members, u.id As user_id, u.username, u.avatar, u.email, u.followers 
        FROM posts p
      LEFT JOIN users u
        ON p.poster_id = u.id
      LEFT JOIN communities c
        ON p.community_id = c.id
      WHERE p.poster_id = $1
    `,
    // text: 'SELECT * FROM posts WHERE poster_id = $1',
    values: [posterId],
  };
  return connection.query(sql);
};

module.exports = getUserPostsQuery;
