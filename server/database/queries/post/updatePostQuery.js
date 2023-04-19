const { connection } = require('../../config');

const updatePostQuery = ({
  id, title, caption, images, video, posterId, communityId,
}) => {
  const sql = {
    text: 'UPDATE posts SET title = $1, caption = $2, images = $4, video = $4, poster_id = $5, community_id = $6 WHERE id = $7 RETURNING *',
    values: [title, caption, images, video, posterId, communityId, id],
  };
  return connection.query(sql);
};

module.exports = updatePostQuery;
