const path = require('path');
const keystone = require('keystone');
const cors = require('cors');

const Example = keystone.list('Example');

module.exports = (app) => {
  app.use(cors());

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/files/index.html'));
  });

  app.get('/api/examples', (req, res) => {
    Example.model.find((err, items) => {
      if (err) return res.apiError('database error', err);
      res.send(items);
    });
  });
};