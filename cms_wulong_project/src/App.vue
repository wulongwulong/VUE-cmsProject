<template>
  <div id="app">
    <!-- 标题栏 -->
    <mt-header fixed title="cms信息管理系统"></mt-header>
    <!-- router-view -->
    <router-view />
    <!-- {{selected}} -->
    <!-- 底部菜单 -->
    <mt-tabbar v-model="selected" >
      <mt-tab-item id="Home">
        <img slot="icon" src="../static/images/home.png" />
        首页
      </mt-tab-item>
      <mt-tab-item id="Member">
        <img slot="icon" src="../static/images/vip.png" />
        会员
      </mt-tab-item>
      <mt-tab-item id="ShopCar">
        <img slot="icon" src="../static/images/shopcar.png" />
        购物车
      </mt-tab-item>
      <mt-tab-item id="Search">
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
  },
  watch :{
    //不能使用箭头函数，因为this会向上级绑定
    selected: function(newV , oldV){
       console.log(newV);//页面的改变
       if(oldV == newV){
         return
       }else{
         this.$router.push({
          name: newV,
        });
       }
       
    }
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
  margin-top: 45px;
}
.mint-tabbar{
  position: fixed;
  bottom: 0;
}
</style>
