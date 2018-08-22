<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page,index) of pages" :key="index" data-swiper-autoplay="2500">
                <div class="icon" v-for="item of page" :key="item.id">
                    <img :src="item.imgUrl" alt="">
                    <p>{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
export default {
  name: "home",props:['iconList'],
  data() {
    return {
        swiperOption: {
                autoplay: false,
                loop:true
            },
    }
  },
    computed:{
        pages(){
            var pages=[];
            this.iconList.forEach((item,index) => {
                const page=Math.floor(index/8);
                if(!pages[page]){
                    pages[page]=[]
                }
                pages[page].push(item)
            });
            return pages
        }
    }
};
</script>
<style scoped>
.icon{
    width: 25%;
    float: left;
    text-align: center
}
.icon img{
    width: 80%;
}
</style>


