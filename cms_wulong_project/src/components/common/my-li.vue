<template>
    <li  >
        <slot></slot>
    </li>
</template>

<script>
export default {
    name: 'my-li',
    data() {
        return{
            
        }
    }

}
</script>

<style scoped>
    li{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width:33%;
        padding-top: 10px;
        padding-bottom: 10px;
        
    }

</style>