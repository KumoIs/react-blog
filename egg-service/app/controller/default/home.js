'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const result = await this.app.mysql.get('article', {});
    console.log(result);
    this.ctx.body = result;
  }

  async getArticleList() {
    const sql = 'SELECT article.id as id,' +
        'article.title as title,' +
        'article.introduce as introduce,' +
        'article.createTime as createTime,' +
        'article.previewNum as previewNum ,' +
        'article.article_content as content,' +
        '.type.typeName as typeName ' +
        'FROM article LEFT JOIN type ON article.type_id = type.id';

    const results = await this.app.mysql.query(sql);

    this.ctx.body = {
      data: results,
    };
  }

  async getArticleById() {
    // 先配置路由的动态传值，然后再接收值
    const id = this.ctx.params.id;

    const sql = 'SELECT article.id as id,' +
        'article.title as title,' +
        'article.introduce as introduce,' +
        'article.article_content as content,' +
        'article.createTime as createTime,' +
        'article.previewNum as previewNum ,' +
        'type.typeName as typeName ,' +
        'type.id as typeId ' +
        'FROM article LEFT JOIN type ON article.type_id = type.id ' +
        'WHERE article.id=' + id;


    const result = await this.app.mysql.query(sql);


    this.ctx.body = { data: result };

  }
}

module.exports = HomeController;
