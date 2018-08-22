<template>
    <div class="back iconfont"><router-link :to="'/'">&#xe60b;</router-link>
    </div>
</template>
<script>
export default {
    name:'buy'
}
</script>
<style scoped>
    .back{
        width: 20px;height: 20px;background: #000;
        opacity: 0.7;
        color: #fff;
        position: absolute;
        left: 20px;
        top: 20px;
        border-radius: 50%;
    }
    a{
        text-decoration-style: none;
    }
</style>
