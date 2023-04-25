const { connection } = require('../../config');

const getUserPostsQuery = (posterId) => {
  const sql = {
    text: `
      SELECT posts.*, communities.*, users.username, users.avatar, users.email, users.followers 
      FROM posts 
      INNER JOIN users 
        ON posts.poster_id = users.id
      INNER JOIN communities
        ON posts.community_id = communities.id
      WHERE poster_id = $1
    `,
    // text: 'SELECT * FROM posts WHERE poster_id = $1',
    values: [posterId],
  };
  return connection.query(sql);
};

module.exports = getUserPostsQuery;
