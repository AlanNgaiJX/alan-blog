<!--
 * @Author: your name
 * @Date: 2021-03-20 01:10:38
 * @LastEditTime: 2021-03-20 02:21:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /alan-blog/docs/.vuepress/components/CountArticle.vue
-->
<template>
  <div id="count-article">
    <div class="grid-list">
      <div
        class="grid-item"
        v-for="item in categories"
        :key="item.title"
        @click="routeTo(item.firstPath)"
      >
        <Icon :name="item.icon" className="category-icon"></Icon>
        <div class="title">{{ item.title }}</div>
        <div class="count">{{ item.count }} 篇</div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "./icon.vue";
const articleSidebar = require("../sidebar/article-sidebar.js");
export default {
  name: "count-article",
  components: { Icon },
  data() {
    return {
      articleSidebar: articleSidebar,
    };
  },
  computed: {
    categories() {
      return this.articleSidebar.list
        .filter((item) => item)
        .map((item) => {
          return {
            title: item.title,
            icon: item.icon,
            count: item.children.length,
            firstPath: item.children[0],
          };
        });
    },
  },
  methods: {
    routeTo(path) {
      this.$router.push({ path });
    },
  },
};
</script>

<style lang="scss">
#count-article {
  .grid-list {
    display: grid;
    max-width: 600px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 160px 160px 160px;
    justify-items: center;
    align-items: center;
    justify-content: center;
  }

  .grid-item {
    list-style: none;
    width: 130px;
    height: 130px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 12px;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
      color: #fff;
      background-color: #000;

      .category-icon {
        color: #fff;
      }
    }

    .category-icon {
      width: 50px;
      height: 50px;
      color: rgb(72, 72, 72);
      margin-bottom: 15px;
    }

    .title {
      margin-bottom: 5px;
    }
  }
}
</style>
