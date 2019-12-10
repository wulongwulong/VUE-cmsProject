<template>
  <div>
<!-- 标题 -->
  <nav-bar :childTitle="mTitle" class="mynav"></nav-bar>
<!-- 内容 list-->
<ul>
  <li v-for="(news ,index) in newsList" :key="index">
    <a href="#">
      <img :src="news.imgUrl" alt="error" class="leftimg">
      <div>
        <span>{{news.name}}</span>
        <div>
          <p class="counttime">点击数:{{news.times}}</p>
          <p>发表时间:{{news.pubTime | converTime('YYYY年MM月DD日 HH:mm:ss')}}</p>
        </div>
      </div>
    </a>

  </li>
</ul>
  </div>



</template>

<script>
export default {
    name: 'NewsList' ,
        data(){
        return{
            mTitle: '新闻列表',
            newsList: [
              {
                name: '怎么追到你喜欢的女孩子',
                imgUrl : '../../../static/images/pic1.png',
                times: 12,
                pubTime: Date.parse(new Date()),


              },{
                 name: '怎么让你更加有魅力',
                 imgUrl : '../../../static/images/pic2.png',
                 times: 12,
                 pubTime: Date.parse(new Date()),

              },{
                 name: '如何正确的撸一只大脸猫',
                 imgUrl : '../../../static/images/pic3.png',
                 times: 12,
                 pubTime: Date.parse(new Date()),
              },{
                 name: '怎么追到你喜欢的女孩子',
                 imgUrl : '../../../static/images/pic4.png',
                 times: 12,
                 pubTime: Date.parse(new Date()),
              },{
                 name: '怎么追到你喜欢的女孩子',
                 imgUrl : '../../../static/images/pic5.png',
                 times: 12,
                 pubTime: Date.parse(new Date()),
              }
            ]
        }

    },

}
</script>

<style scoped>
  .mynav{
    width: 100%;
  }
  li{
    list-style-type: none;
  }
  ul{
    padding-left:0px;
    list-style-type: none;
  }
  .leftimg{
    width: 80px;
    height: 60px;
    float:left;

  }
  .counttime{
    width: auto;
  }
</style>