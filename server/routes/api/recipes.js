const keystone = require('keystone');

const Recipe = keystone.list('Recipe');

exports.list = (req, res) => {
  Recipe.model.find((err, items) => {
    if (err) return res.apiError('database error', err);
    res.apiResponse({
      recipe: items,
    });
  });
};