<template>
    <div class="hot">
        <p>热销推荐</p>
        <ul>
            <li v-for="item of recommendList" :key="item.id">
                <img :src="item.imgUrl" alt="">
                <div class="child">
                    <p>{{item.title}}</p>
                    <p>{{item.desc}}</p>
                    <button>查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: "home",props:['recommendList'],
  data() {
    return {

    };
  }
};
</script>
<style scoped>
    .hot li{
        list-style: none;
        display: flex
    }
    .hot p{
        text-align: center;
        line-height: 1.5em;
        background: #ccc;
    }
</style>


