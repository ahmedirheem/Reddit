const { connection } = require('../../config');

const addPostQuery = ({
  title, caption, images, video, link, posterId, communityId,
}) => {
  const sql = {
    text: 'INSERT INTO posts(title, caption, images, video, link, poster_id, community_id) VALUES($1, $2, $3, $4, $5, $6, $7)',
    values: [title, caption, images, video, link, posterId, communityId],
  };
  return connection.query(sql);
};

module.exports = addPostQuery;
