const { connection } = require('../../config');

const getAllPostsQuery = () => {
  const sql = {
    text: `
      SELECT posts.*, communities.*, users.username, users.avatar, users.email, users.followers 
      FROM posts 
      INNER JOIN users 
        ON posts.poster_id = users.id
      INNER JOIN communities
        ON posts.community_id = communities.id`,
  };
  return connection.query(sql);
};

module.exports = getAllPostsQuery;
