const sidebar = require('./sidebar/index')
const path = require('path');

module.exports = {
  head: [['link', { rel: 'icon', href: `/favicon.ico` }]],
  // base: '/blog/',// 部署在 github.io 时
  // base: '/alan-blog/',// 部署在 alanngai.xyz 时
  base: '/', // 部署在 alanngai1996.xyz 时
  title: "Alan's blog",
  description: "Alan Ngai's blog",
  configureWebpack: {
    resolve: {
      alias: {
        '@blogImages': path.resolve('./assets/blogImages'),
        '@projectImages': path.resolve('./assets/projectImages')
      }
    }
  },
  markdown: {
    anchor: { permalink: false },
  },
  themeConfig: {
    smoothScroll: true,
    logo: '/assets/imgs/favicon.svg',
    nav: [
      { text: '主页', link: '/' },
      { text: 'Github', link: 'https://github.com/AlanNgaiJX' },
    ],
    sidebar,
  },
  markdown: {
    lineNumbers: true,
    // markdown-it-anchor 的选项
    anchor: { permalink: true, permalinkBefore: true, permalinkSymbol: '#' },
    // 控制外部链接的行为
    externalLinks: { target: '_blank', rel: 'noopener noreferrer' },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2] },
    extendMarkdown: (md) => {
      // 使用更多的 markdown-it 插件!
    },
    extractHeaders: [ 'h2', 'h3' ]
  },
  plugins: {
    '@vuepress/active-header-links': {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor',
    },
    '@vuepress/back-to-top':{}
  },
}
