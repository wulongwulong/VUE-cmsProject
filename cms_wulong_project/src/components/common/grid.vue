// 九宫格组件
<template>
    <div class="sudoku_row"  >
        <div class="sudoku_item " 
        :class="curSelect==module.id?'opacity':''" 
        v-for="(module,index) in modules" 
        :key="index" 
        @touchstart="touchstart(index)" 
        @touchend="touchend">
            <router-link :to="module.route"> 
            <img :src="module.img_src" width="40" height="40" >
            
            {{module.name}}
            </router-link>
        </div>
    </div> 
</template>  
<script> 
export default {  
  name: 'grid',  
  data() {  
    return {  
      modules:[{
                id:0,
                name:'新闻资讯',
                img_src:require('../../../static/images/plane.png'),
                route: {name : 'Home'}
            },{
                id:1,
                name:'图文分享',
                img_src:require('../../../static/images/game.png'),
                route: {name : 'Home'}
            },{
                id:2,
                name:'商品展示',
                img_src:require('../../../static/images/music.png'),
                route: {name : 'Home'}
            },{
                id:3,
                name:'留言反馈',
                img_src:require('../../../static/images/logistics.png'),
                route: {name : 'Home'}
            },{
                id:4,
                name:'搜索咨询',
                img_src:require('../../../static/images/hospital.png'),
                route: {name : 'Home'}
            },{
                id:5,
                name:'联系我们',
                img_src:require('../../../static/images/hospital.png'),
                route: {name : 'Home'}
            }],
            curSelect:null
    };  
  },components:{
    
  },methods:{
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
    } 
};  
</script>  
<style >  
    .sudoku_row{
        display: flex;
        align-items: center;
        width:100%;
        flex-wrap: wrap;
    }
    .sudoku_item{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width:33%;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .opacity{
        opacity: 0.4;
        background: #e5e5e5;
    }
    .sudoku_item img{
        margin-bottom: 3px;
        display: block;
    }
</style>