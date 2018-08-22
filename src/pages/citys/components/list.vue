<template>
    <ul class="list">
        <li v-for="(key,value,index) in cityList" :key="index" :id="value">{{value}}
            <p v-for="item of key" :key="item.id" @click="$store.state.show=item.name"><router-link :to="'/'">{{item.name}}</router-link></p>
        </li>
        <div class="ab">
            <a href="javascript:void(0)" @click="bb('#'+value)" v-for="(key,value,index) in cityList" :key="index">{{value}}</a>
        </div>
    </ul>
</template>
<script>
export default {
  name: "city",
  props: ["cityList"],
  methods: {
    aa() {
      console.log(this.cityList);
    },
    bb(ele) {
      var anchor = this.$el.querySelector(ele);
      console.log(anchor.offsetTop)
      document.documentElement.scrollTop = anchor.offsetTop;
    }
  }
};
</script>
<style scoped>
.ab {
    position: fixed;
    right: 30px;
    top: 250px;
}
.ab a{
    display: block;
    font-size: 12px;
    line-height: 12px;
}
</style>
