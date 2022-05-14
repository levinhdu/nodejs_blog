const newRouter = require('./news');
const meRouter = require('./me');
const coursesRouter = require('./courses');
const siteRouter = require('./site');

function routes(app) {
  app.use('/news', newRouter);
  app.use('/me', meRouter);
  app.use('/courses', coursesRouter);
  app.use('/', siteRouter);
}

module.exports = routes;
