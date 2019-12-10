<template>
  <div>
    <mt-swipe :auto="4000" class="contanner">
      <!-- v-for 组件的时候要给key ，避免vue计算key，来提升性能 -->
      <mt-swipe-item v-for="(item, index) in imgs" :key="index" class ='banner'>
        <img :src="item.photo"   alt="item.name" class ='contanner'/>
      </mt-swipe-item>
    </mt-swipe>
    <!-- 九宫格 -->
    <!-- <grid></grid> -->
    <my-ul  >
        <my-li  
        :class="curSelect==module.id?'opacity':''" 
        v-for="(module,index) in modules" 
        :key="index" 
        @touchstart="touchstart(index)" 
        @touchend="touchend">
            <router-link :to="module.route"> 
            <img  :src="module.img_src" />
            
            {{module.name}}
            </router-link>
        </my-li>
    </my-ul> 
    <!-- <test></test> -->

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Home",
  components: {
   
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
      modules:[{
                id:0,
                name:'新闻资讯',
                img_src:require('../../static/images/news_information.png'),
                route: {name : 'NewsList'}
            },{
                id:1,
                name:'图文分享',
                img_src:require('../../static/images/share.png'),
                route: {name : 'Home'}
            },{
                id:2,
                name:'商品展示',
                img_src:require('../../static/images/product_exhibition.png'),
                route: {name : 'Home'}
            },{
                id:3,
                name:'留言反馈',
                img_src:require('../../static/images/message_feedback.png'),
                route: {name : 'Home'}
            },{
                id:4,
                name:'搜索咨询',
                img_src:require('../../static/images/counsel.png'),
                route: {name : 'Home'}
            },{
                id:5,
                name:'联系我们',
                img_src:require('../../static/images/contact_us.png'),
                route: {name : 'Home'}
            }],
            curSelect:null,
    };
  },
  methods:{
        touchstart:function(e){
            var that = this;
            var list = that.modules;
            for (var i = 0, len = list.length; i < len; ++i) {
                if (list[i].id == e) {
                    that.curSelect = i;
                }
            }
        },touchend:function(){
            var that = this;
            that.curSelect = null;
        }
    } ,
  created() {
    this.$log();
    this.$log();
    this.$log = 'abc' ;
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
  margin: 0%;
  width: 100%;
  height: 130px;
}
.opacity{
    opacity: 0.4;
    background: #e5e5e5;
    }
img{
    width: 40px ;
    height: 40px ;
    margin-bottom: 3px;
    display: block;
    margin-left: 13px;
    margin-right: 13px;
}


</style>
