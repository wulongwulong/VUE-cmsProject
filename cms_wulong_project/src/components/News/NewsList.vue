<template>
  <div>
<!-- 标题 -->
  <nav-bar :childTitle="mTitle" class="mynav"></nav-bar>
<!-- 内容 list-->
<ul>
  <li v-for="(news ,index) in newsList" :key="index">
    <a href="#">
      <img src="../../../static/images/news_information.png" alt="error">
      <div>
        <span>{{news.name}}</span>
        <div>
          <p>点击数:{{news.times}}</p>
          <p>发表时间:{{news.pubTime}}</p>
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
                times: 12,
                pubTime: '2 days ago'

              },{
                 name: '怎么让你更加有魅力',
                 times: 12,
                 pubTime: '2 days ago'

              },{
                 name: '怎么追到你喜欢的女孩子',
                 times: 12,
                 pubTime: '2 days ago'

              },{
                 name: '怎么追到你喜欢的女孩子',
                 times: 12,
                 pubTime: '2 days ago'

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
    list-style-type: none;
  }
</style>