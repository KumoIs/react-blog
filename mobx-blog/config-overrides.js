const { override, fixBabelImports, addLessLoader, addWebpackPlugin } = require('customize-cra');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const darkTheme  = require('@ant-design/dark-theme');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
     javascriptEnabled: true,
     modifyVars: darkTheme,
  }),
  addWebpackPlugin(new AntdDayjsWebpackPlugin())
);
