const { connection } = require('../../config');

const getAllPostsQuery = () => {
  const sql = {
    text: `
      SELECT p.*, u.username, u.avatar, u.email, u.followers, c.id AS com_id, c.name, c.avatar, c.description, c.members
      FROM posts p
      LEFT JOIN users u
        ON p.poster_id = u.id
      LEFT JOIN communities c
        ON p.community_id = c.id`,
  };
  return connection.query(sql);
};

module.exports = getAllPostsQuery;
