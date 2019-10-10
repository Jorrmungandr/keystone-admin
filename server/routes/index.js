module.exports = (app) => {
  const path = require('path');
  const keystone = require('keystone');

  const importRoutes = keystone.importer(__dirname);
  const routes = {
    api: importRoutes('./api'),
  };

  app.get('/api/recipes/', keystone.middleware.api, routes.api.recipes.list);
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/files/index.html'));
  });
};