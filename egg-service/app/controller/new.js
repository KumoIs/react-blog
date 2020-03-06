'use strict';

const Controller = require('egg').Controller;

class NewController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = '这是一个新的页面';
  }
}

module.exports = NewController;
