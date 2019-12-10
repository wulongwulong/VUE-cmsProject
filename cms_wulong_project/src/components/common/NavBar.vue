<template>
  <div>
      <mt-header :title="childTitle">
        <router-link to="/" slot="left">
        <mt-button icon="back" @click="goBack">返回</mt-button>
        </router-link>
     <mt-button icon="more" slot="right"></mt-button>
     </mt-header>
  </div>
</template>

<script>
export default {
    name: 'navBar',
    props:['childTitle'], //props 属性在template 直接用
    data(){
        return{
            
        }

    },
    created(){
        //在这里就是用this.mtitle
        console.log(this.mmmtitle);

    },
    methods:{
        goBack(){
            this.$router.go(-1);
        }
    }

}
</script>

<style>

</style>