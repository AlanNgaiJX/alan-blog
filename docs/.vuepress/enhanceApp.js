/*
 * @Author: your name
 * @Date: 2021-03-20 02:16:38
 * @LastEditTime: 2021-03-21 03:27:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /alan-blog/docs/.vuepress/enhanceApp.js
 */
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer, // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
  options.data = {
    currLight: '',
  }
  options.watch = {
    currLight(nv) {
      const html = document.getElementsByTagName('html')[0]
      const lightBtn = document.getElementById('lightBtn')
      window.localStorage.setItem('currLight', nv)
      if (nv === 'dark') {
        html.style.filter = 'invert(1) hue-rotate(180deg)'
      } else if (nv === 'light') {
        html.style.filter = ''
      }
      setTimeout(() => {
        html.style.transition = `filter .3s`;
      }, 0);
      lightBtn && (lightBtn.innerText = nv)
    },
  }

  options.mounted = function() {
    this.currLight = window.localStorage.getItem('currLight') || 'light'

    const div = document.createElement('div')
    div.id = 'lightBtn'
    div.innerText = this.currLight
    document.body.append(div)

    div.addEventListener('click', () => {
      if ((this.currLight === 'light')) {
        this.currLight = 'dark'
      } else {
        this.currLight = 'light'
      }
    })
  }
}
