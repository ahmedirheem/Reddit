const { getCommunitiesQuery } = require('../../database');

const getCommunities = (req, res, next) => {
  getCommunitiesQuery()
    .then((data) => res.json({
      error: false,
      data: {
        communities: data.rows,
      },
    }))
    .catch((err) => next(err));
};

module.exports = getCommunities;
