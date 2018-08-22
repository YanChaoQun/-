<template>
    <div class="hot">
        <p>当前城市</p>
        <div class="hotCity">
            <div>北京</div>
        </div>
        <p>热门城市</p>
        <div class="hotCity">
            <div v-for="item of hotList" :key="item.id">{{item.name}}</div>
        </div>
    </div>
</template>
<script>
export default {
    name:'city',
    props:['hotList'],
    data(){
        return{

        }
    }
}
</script>
<style scoped>
.hotCity{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.hotCity div{
    width: 30%;
    border: 1px solid #ccc;
}
</style>
