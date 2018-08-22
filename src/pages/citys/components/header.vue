<template>
    <div class="header">
        <span class="iconfont back"><router-link :to="'/'">&#xe60b;</router-link></span>
        城市选择
    </div>
</template>
<script>
export default {
    name:'city'
}
</script>
<style scoped>
    .back{float: left;
        margin-left: 30px;
    }.header{
        text-align: center;
        background: #00bcd4;
    }
</style>


