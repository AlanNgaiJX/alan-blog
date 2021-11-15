const sidebar_js = require('./js.js');
const sidebar_css = require('./css.js');
const sidebar_browser = require('./browser.js');
const sidebar_network = require('./network.js');
const sidebar_vue = require('./vue.js');
const sidebar_node = require('./node.js');
const sidebar_arithmetic = require('./arithmetic.js');
const sidebar_other = require('./other.js');

const articleSidebar = {
  path: '/article/',
  list: [
    '',
    sidebar_js,// js
    sidebar_css,// css
    sidebar_browser,// 浏览器
    sidebar_network,// 网络
    sidebar_vue,// vue
    sidebar_node,// node
    sidebar_arithmetic,// 算法
    sidebar_other// 其他
  ],
};

module.exports = articleSidebar;