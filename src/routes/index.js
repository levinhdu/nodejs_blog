const newRouter = require('./news');
const coursesRouter = require('./courses');
const siteRouter = require('./site');

function routes(app) {
  app.use('/news', newRouter);
  app.use('/courses', coursesRouter);
  app.use('/', siteRouter);
}

module.exports = routes;
