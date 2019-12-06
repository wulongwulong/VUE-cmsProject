<template>
  <div>
    <mt-swipe :auto="4000" class="contanner">
      <!-- v-for 组件的时候要给key ，避免vue计算key，来提升性能 -->
      <mt-swipe-item v-for="(item, index) in imgs" :key="index" class ='banner'>
        <img :src="item.photo"   alt="item.name" class ='contanner'/>
      </mt-swipe-item>
    </mt-swipe>
    <!-- 九宫格 -->
    <grid></grid>

  </div>
</template>

<script>
import axios from 'axios'
import Grid from '../components/grid'

export default {
  name: "Home",
  components: {
    Grid
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      imgs: [
        {
          name : 'banner1',
          src : "../static/images/banner1.png"
        },
                {
          name : 'banner2',
          src : "../static/images/banner2.png"
        },
                {
          name : 'banner3',
          src : "../static/images/banner3.png"
        },
      ], //轮播图数据
    };
  },
  created() {
    axios.get("/api/data")
      .then(res => {
        this.imgs = res.data.data;
        console.log(this.imgs); //在console中看到数据
      })
      .catch(err => {
        alert("wrong");
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.banner{
  width: 100%;
  height: 150px;
}
.contanner{
  width: 100%;
  height: 130px;
}

</style>
