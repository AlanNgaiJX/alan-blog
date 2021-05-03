<!--
 * @Author: your name
 * @Date: 2021-03-17 15:34:55
 * @LastEditTime: 2021-04-25 22:01:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /alan-blog/docs/.vuepress/components/home.vue
-->
<template>
  <div id="home-page">
    <div class="banner">
      <div class="bg-wrap" v-if="showFireCanvas">
        <FireCnavas
          :custom="{ SPLAT_RADIUS: 0.005 }"
          :rel="menuList"
          v-if="menuList"
        />
      </div>
      <div class="content-wrap" ref="contentWrap">
        <div class="inner-wrap">
          <Icon name="dragonfly" className="banner-icon" />
          <div class="name">Alan Ngai</div>
          <p class="title">" Believe yourself "</p>
          <div class="menu-list" ref="menuList">
            <div class="menu-item" @click="routeTo('/article')">
              <Icon name="wenzhang" className="menu-item-icon" />
              <p>Article 文章</p>
            </div>
            <div class="menu-item" @click="routeTo('/project/fedora')">
              <Icon name="gongcheng" className="menu-item-icon" />
              <p>Project 项目</p>
            </div>
            <!-- <div class="menu-item">
              <Icon name="shenfen" className="menu-item-icon" />
              <p>Resume 简历</p>
            </div> -->
          </div>
        </div>
      </div>
    </div>

    <!-- 备案号分环境显示 -->

    <!-- https://alanngaijx.github.io/ 无需显示备案号 -->
    <!-- ... -->

    <!-- https://alanngaijx.xyz/ 或 https://www.alanngaijx.xyz 显示备案号 -->
    <div class="footer" v-if="host.includes('alanngaijx.xyz')">
      <a href="https://beian.miit.gov.cn" target="_blank"
        >粤ICP备2021041982号</a
      >
    </div>
    
    <!-- https://alanngai1996.xyz 显示备案号 -->
    <div class="footer" v-if="host.includes('alanngai1996.xyz')">
      <a href="https://beian.miit.gov.cn" target="_blank"
        >粤ICP备2021041982号-2</a
      >
    </div>

  </div>
</template>

<script>
import FireCnavas from './fire-canvas.vue'
import Icon from './icon.vue'

export default {
  name: 'Home',
  components: {
    FireCnavas,
    Icon,
  },
  data() {
    return {
      showFireCanvas: false,
      contentWrap: null,
      menuList: null,
      host:"",
    }
  },
  methods: {
    routeTo(path) {
      this.$router.push(path)
    },
  },
  mounted() {
    this.contentWrap = this.$refs['contentWrap']
    this.menuList = this.$refs['menuList']
    this.$root.$el.setAttribute('data-currPage', 'home')
    setTimeout(() => {
      this.showFireCanvas = true
    }, 200)
    this.host = window.location.host
  },
  beforeDestroy() {
    this.$root.$el.setAttribute('data-currPage', 'not-home')
  },
}
</script>

<style lang="scss">
@keyframes bounce {
  0%,
  20%,
  53%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
  40%,
  43% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -30px, 0) scaleY(1.1);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }
  70% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -15px, 0) scaleY(1.05);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }
  80% {
    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    -webkit-transform: translateZ(0) scaleY(0.95);
    transform: translateZ(0) scaleY(0.95);
  }
  90% {
    -webkit-transform: translate3d(0, -4px, 0) scaleY(1.02);
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
}
.fire-canvas {
  filter: invert(1) hue-rotate(180deg);
}

// 不同页面重做样式
[data-currPage='home'] {
  .theme-default-content:not(.custom) {
    max-width: 1000px;
    padding: 0;
    padding-top: 2rem;
  }
  .page-edit {
    display: none;
  }
}

#home-page {
  .banner {
    position: relative;
    width: 100%;
    height: 560px;

    .bg-wrap {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }

    .content-wrap {
      position: absolute;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      top: 0;
      left: 0;
      pointer-events: none;

      .inner-wrap {
        height: 100%;
        top: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 20px;
        pointer-events: none;
      }

      .banner-icon {
        width: 200px;
        height: 200px;
        opacity: 0.5;
        pointer-events: none;
        color: #000;
      }

      .name {
        margin-top: 15px;
        font-size: 36px;
        font-weight: bold;
      }

      .title {
        font-size: 20px;
      }

      .title,
      .name {
        pointer-events: none;

        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      .menu-list {
        margin-top: 50px;
        display: flex;
        // justify-content: space-between;
        justify-content: center;
        width: 50%;
        pointer-events: auto;

        .menu-item {
          width: 100px;
          height: 100px;
          min-width: 100px;
          pointer-events: auto;
          background-color: rgba(238, 238, 238, 0.297);
          display: flex;
          align-items: center;
          flex-direction: column;
          pointer-events: auto;
          box-sizing: border-box;
          padding-top: 20px;
          cursor: pointer;
          transition: all 0.3s;
          color: #333;
          box-shadow: 0 0px 0px rgba(0, 0, 0, 0.15);
          margin: 0 30px;

          &:hover {
            color: #fff;
            background-color: rgba(72, 72, 72, 0.509);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

            .menu-item-icon {
              animation: bounce;
              animation-duration: 1.2s;
              animation-iteration-count: 1;
            }
          }

          .menu-item-icon {
            width: 50px;
            height: 50px;
            pointer-events: none;
          }

          p {
            font-size: 12px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            margin-top: 20px;
          }
        }
      }
    }
  }

  .footer{
    display: flex;
    justify-content: center;
    font-size: 12px;
    margin-top: 50px;

    a{
      color: #000;
      text-decoration: none;
    }
  }
}
</style>
