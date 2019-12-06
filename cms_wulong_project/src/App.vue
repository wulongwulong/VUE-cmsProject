<template>
  <div id="app">
    <!-- 标题栏 -->
    <mt-header fixed title="cms信息管理系统"></mt-header>
    <!-- router-view -->
    <router-view />
    <!-- 底部菜单 -->
    <mt-tabbar v-model="selected">
      <mt-tab-item id="首页">
        <img slot="icon" src="../static/images/home.png" />
        首页
      </mt-tab-item>
      <mt-tab-item id="会员">
        <img slot="icon" src="../static/images/vip.png" />
        会员
      </mt-tab-item>
      <mt-tab-item id="购物车">
        <img slot="icon" src="../static/images/shopcar.png" />
        购物车
      </mt-tab-item>
      <mt-tab-item id="查找">
        <img slot="icon" src="../static/images/search.png" />
        查找
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      selected: ""
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
