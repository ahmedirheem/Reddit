const { connection } = require('../../config');

const addPostQuery = ({
  title, caption, images, video, posterId, communityId,
}) => {
  const sql = {
    text: 'INSERT INTO posts(title, caption, images, video, poster_id, community_id) VALUES($1, $2, $3, $4, $5, $6)',
    values: [title, caption, images, video, posterId, communityId],
  };
  return connection.query(sql);
};

module.exports = addPostQuery;
