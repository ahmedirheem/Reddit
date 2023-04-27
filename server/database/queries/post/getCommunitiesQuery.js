const { connection } = require('../../config');

const getCommunitiesQuery = () => {
  const sql = {
    text: 'SELECT * FROM communities',
  };

  return connection.query(sql);
};

module.exports = getCommunitiesQuery;
