<template>
    <div class="search">
        <input type="text" placeholder="输入城市名或拼英" v-model="msg" @click="aa">
        <ul v-if="msg" >
            <li v-for="item of arr" :key="item.id" v-if="test(item.spell)||test1(item.name)" >{{item.name}}</li>
        </ul>
    </div>
</template>
<script>
export default {
  name: "city",
  props: ["cityList"],
  methods: {
    aa() {
        this.arr=[]
        for (const key in this.cityList) {
            this.cityList[key].forEach(item => {
                this.arr.push(item)
            });
        }
        // console.log(this.arr)
    },
    test(a){
        if(a.indexOf(this.msg)!=-1){
            return true
        }else{
            return false
        }
    },
        test1(a){
        if(a.indexOf(this.msg)!=-1){
            return true
        }else{
            return false
        }
    }
  
  },

  data() {
    return {
    //   citylist: this.cityList,
      arr:[],
      msg: ""
    };
  }
};
</script>
<style scoped>
.search input {
  width: 90%;
  margin-left: 5%;
  text-align: center;
  outline: none;
}
</style>
