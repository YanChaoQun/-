<template>
    <div class="zmqn">
        <p>周末去哪儿</p>
        <ul>
            <li v-for="item of weekendList" :key="item.id">
                <img :src="item.imgUrl" alt="">
                <p>{{item.title}}</p>
                <p>{{item.desc}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: "home",props:['weekendList'],
  data() {
    return {
    
    };
  }
};
</script>
<style scoped>
.zmqn li{
list-style: none;
}
img{
    width: 100%;
}
</style>


