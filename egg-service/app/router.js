'use strict';
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  require('./router/default')(app);
  require('./router/admin')(app);
  router.get('/', controller.new.index);
};
