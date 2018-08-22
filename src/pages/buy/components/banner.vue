<template>
    <div class="banner"> 
        <img :src="bannerImg" alt="" @click="show=!show">
        <p class="text">{{sightName}}</p>
        <div class="lbt" v-if="show" @click="show=!show">
            <swiper :options="swiperOption">
            <swiper-slide v-for="(item,index) of gallaryImgs" :key="index" data-swiper-autoplay="2500">
                <img class="swiper-img" :src="item" alt="">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
        </div>
    </div>
</template>
<script>
export default {
  name: "buy",
  data() {
    return {
      swiperOption: {
          pagination: {
            el:'.swiper-pagination',
            clickable:true 
          },
          loop: true,
          autoplay: true
      },
      show:false,
    };
  },
  props:['sightName','bannerImg','gallaryImgs']
};
</script>
<style scoped>
.text{
  position: relative;
  top: -50px;
  color: #ffffff;
}
.lbt{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000;
}
.lbt img{
  width: 100%;
}
</style>
