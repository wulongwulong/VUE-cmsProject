<template>  
    <div class="sudoku_row"  >
        <div class="sudoku_item " 
        :class="curSelect==sudoku.id?'opacity':''" 
        v-for="(sudoku,index) in sudokus" 
        :key="index" 
        @touchstart="touchstart(index)" 
        @touchend="touchend">
            <img :src="sudoku.img_src" width="40" height="40" >
            {{sudoku.name}}
        </div>
    </div> 
</template>  
<script> 
export default {  
  name: 'sudoku',  
  data() {  
    return {  
      sudokus:[{
                id:0,
                name:'飞机',
                img_src:require('../../static/images/plane.png')
            },{
                id:1,
                name:'游戏',
                img_src:require('../../static/images/game.png')
            },{
                id:2,
                name:'音乐',
                img_src:require('../../static/images/music.png')
            },{
                id:3,
                name:'物流',
                img_src:require('../../static/images/logistics.png')
            },{
                id:4,
                name:'医院',
                img_src:require('../../static/images/hospital.png')
            },{
                id:5,
                name:'医院',
                img_src:require('../../static/images/hospital.png')
            },{
                id:6,
                name:'医院',
                img_src:require('../../static/images/hospital.png')
            },{
                id:7,
                name:'医院',
                img_src:require('../../static/images/hospital.png')
            },{
                id:8,
                name:'医院',
                img_src:require('../../static/images/hospital.png')
            },{
                id:9,
                name:'医院',
                img_src:require('../../static/images/hospital.png')
            },{
                id:10,
                name:'医院',
                img_src:require('../../static/images/hospital.png')
            }],
            curSelect:null
    };  
  },components:{
    
  },methods:{
        touchstart:function(e){
            var that = this;
            var list = that.sudokus;
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
        width:25%;
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