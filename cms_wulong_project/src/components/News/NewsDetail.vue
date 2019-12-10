<template>
<div>
    <nav-bar :childTitle="mTitle" class="mynav"></nav-bar>
    <span>内容题目：{{id}}</span>

</div>
</template>

<script>
export default {
 name: 'newsDetail' ,
        data(){
        return{
            mTitle: '新闻详情',
            id: ''
        }
    },
    created(){
        console.log(this.$route.params) ;
        this.id = this.$route.params ;
    }
}
</script>

<style scoped>

</style>