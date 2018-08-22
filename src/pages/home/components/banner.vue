<template>
   <div class="wrapper">
     <swiper :options="swiperOption">
            <swiper-slide v-for="item of swiperList" :key="item.id" data-swiper-autoplay="2500">
              <router-link :to="'/detail/'+item.id">
                <img class="swiper-img" :src="item.imgUrl" alt=""></router-link>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
  name: "home",
  props: ["swiperList"],
  data() {
    return {
         swiperOption: {
          pagination:'.swiper-pagination',
          loop: true,
          autoplay: true
      }
    };
  },
};
</script>
<style scoped>
.swiper-img {
  width: 100%;
}
</style>


