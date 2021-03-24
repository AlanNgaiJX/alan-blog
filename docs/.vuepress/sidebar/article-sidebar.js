/*
 * @Author: your name
 * @Date: 2021-03-17 21:21:59
 * @LastEditTime: 2021-03-25 00:22:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /alan-blog/docs/.vuepress/sidebar/article-sidebar.js
 */
const articleSidebar = {
  path: '/article/',
  list: [
    '',
    {
      title: 'js',
      icon:'js',
      initialOpenGroupIndex: -1,
      children: [
        '/article/js/01-types',
        '/article/js/02-array-basic',
        '/article/js/03-prototype',
        '/article/js/04-context',
        '/article/js/05-closet',
        '/article/js/06-memory',
        '/article/js/07-create-object',
        '/article/js/08-js-module',
        '/article/js/09-event',
        '/article/js/10-map-object',
        '/article/js/11-accuracy-issues',
        '/article/js/12-implicit-conversion',
        '/article/js/13-intervel-raf',
        '/article/js/14-event-proxy',
        '/article/js/15-object',
        '/article/js/16-stick-mode',
        '/article/js/17-evel',
        '/article/js/18-call-apply-bind',
        '/article/js/19-let-const-var',
        '/article/js/20-deconstruct',
        '/article/js/21-arrow-func',
        '/article/js/22-promise',
        '/article/js/23-symbol',
        '/article/js/24-iterator',
        '/article/js/25-generator',
        '/article/js/26-async',
        '/article/js/27-deep-clone',
        '/article/js/28-for-in-for-of',
        '/article/js/29-map-set',
        '/article/js/30-debounce-throttle',
        '/article/js/31-error-types',
      ],
    },
    {
      title: 'css',
      icon:'css',
      initialOpenGroupIndex: -1,
      children: [
        '/article/css/01-center-methods',
        '/article/css/02-location-flow',
        '/article/css/03-word-break',
        '/article/css/04-css-basic',
        '/article/css/05-horizen-scroll',
        '/article/css/06-weird-margin',
        '/article/css/07-css-function',
        '/article/css/08-about-pixel',
        '/article/css/09-1px-problem',
        '/article/css/10-clip-path',
        '/article/css/11-flex',
        '/article/css/12-grid',
      ],
    },
    {
      title: '浏览器',
      icon: 'browser',
      initialOpenGroupIndex: -1,
      children: [
        '/article/browser/01-browser-kernel',
        '/article/browser/02-browser-cache',
        '/article/browser/03-chrome-animation',
        '/article/browser/04-notifications-api',
        '/article/browser/05-localStorage',
      ],
    },
    {
      title: '网络知识',
      icon: 'network',
      initialOpenGroupIndex: -1,
      children: [
        '/article/network/01-tcp-udp',
        '/article/network/02-ip-dns',
        '/article/network/03-http-https',
        '/article/network/04-encryption',
        '/article/network/05-http-header',
        '/article/network/06-ssl-tls',
        '/article/network/07-VPN-VPS-SSR-SS',
      ],
    },
    {
      title: 'vue',
      icon: 'vue',
      initialOpenGroupIndex: -1,
      children: [
        '/article/vue/01-vue-life-circle',
        '/article/vue/02-keep-alive',
        '/article/vue/03-navigation-guards',
        '/article/vue/04-route-cache',
        '/article/vue/05-vuex',
        '/article/vue/06-vue-router',
        '/article/vue/07-mvvm',
        '/article/vue/08-vue-key',
        '/article/vue/09-vue2-basic',
        '/article/vue/10-vue-cli',
      ],
    },
    // {
    //   title: 'react',
    //   initialOpenGroupIndex: -1,
    //   children: [],
    // },
    {
      title: 'node',
      icon: 'node',
      initialOpenGroupIndex: -1,
      children: [
        '/article/node/01-node-crash-problem',
        '/article/node/02-process-env'
      ],
    },
    // {
    //   title: 'express',
    //   initialOpenGroupIndex: -1,
    //   children: [],
    // },
    // {
    //   title: 'webpack',
    //   initialOpenGroupIndex: -1,
    //   children: [],
    // },
    {
      title: 'Arithmetic',
      icon: 'Arithmetic',
      initialOpenGroupIndex: -1,
      children: [
        '/article/arithmetic/1-sort',
        '/article/arithmetic/2-traverse',
      ],
    },
    {
      title:'其他',
      icon:'other',
      initialOpenGroupIndex: -1,
      children: [
        '/article/other/01-linux-basic',
        '/article/other/02-git-basic',
        '/article/other/03-eslint-comment',
      ],
    }
  ],
};

module.exports = articleSidebar;