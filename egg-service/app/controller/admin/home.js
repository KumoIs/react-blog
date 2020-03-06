'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = '<h1 style="color: antiquewhit e">这是管理员API</h1>';
  }
}

module.exports = HomeController;
