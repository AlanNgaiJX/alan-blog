/*
 * @Author: your name
 * @Date: 2021-03-17 21:21:51
 * @LastEditTime: 2021-03-21 02:24:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /alan-blog/docs/.vuepress/sidebar/index.js
 */
const articleSidebar = require('./article-sidebar/index');
const porjectSidebar = require('./project-sidebar');

module.exports = {
  [articleSidebar['path']]: articleSidebar['list'],
  [porjectSidebar['path']]: porjectSidebar['list'],
}
