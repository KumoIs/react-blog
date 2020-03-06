export const url = 'http://127.0.0.1:7001/admin/';

let servicePath = {
  user: url + 'user', // 登录接口
  getTypeInfo: url + 'getTypeInfo', // 获取类型信息
  addArticle: url + 'addArticle', // 添加文章
  updateArticle: url + 'updateArticle', // 修改文章
  getArticleList: url + 'getArticleList', // 获取文章
  delArticle: url + 'delArticle', // 删除文章
  getArticleById: url + 'getArticleById', // 获取文章详情
};

export default servicePath;
