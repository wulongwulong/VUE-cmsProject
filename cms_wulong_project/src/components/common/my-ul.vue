<template>
    <ul>
        <slot></slot>
    </ul>
</template>

<script>
export default {
    name: 'my-ul',
    data() {
        return{
            
        }
    }

}
</script>

<style scoped>
 ul{
        display: flex;
        align-items: center;
        width:100%;
        flex-wrap: wrap;
        margin: 0;
    padding: 0;
    }

</style>