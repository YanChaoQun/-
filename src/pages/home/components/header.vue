<template>
    <div class="header">
      <div class="headerLeft">
      <div class="back iconfont">&#xe60b;</div>
      </div>
      <div class="headerInput">
        <input type="text">
      </div>
      <div class="headerText">
          <router-link :to="'/city/'">{{$store.state.show}}</router-link>
      </div>
    </div>
</template>
<script>
export default {
  name: "home",
};
</script>

<style scoped>
    .header{
      display: flex;
      background: blueviolet;
      width: 100%;
      justify-content: space-around
    }
    .back{
      color: #fff;
    }
</style>