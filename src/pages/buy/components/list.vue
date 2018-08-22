<template>
        <ul>
          <li v-for="(item,index) of categoryList" :key="index">{{item.title}}
            <div v-for="(child,ind) of item.children" :key="ind">{{child.title}}
              <p v-for="(ele ,i) of child.children" :key="i">{{ele.title}}</p>
            </div>
          </li>
        </ul>
</template>
<script>
export default {
  name: "buy",
  props:['categoryList'],
  data() {
    return {
    };
  },

};
</script>
<style scoped>
ul div{
  text-indent: 1em;
}ul p{
  text-indent: 2em;
}
</style>