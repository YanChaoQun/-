<template>
    <div class="header">
        <home-header></home-header>
        <home-banner :swiperList='swiperList'></home-banner>
        <home-icons :iconList='iconList'></home-icons>
        <home-hot :recommendList='recommendList'></home-hot>
        <home-footer :weekendList='weekendList'></home-footer>
    </div>
</template>
<script>
import HomeHeader from './components/header'
import HomeBanner from './components/banner'
import HomeIcons from './components/icons'
import HomeHot from './components/hot'
import HomeFooter from './components/footer'
import axios from 'axios'
export default {
  name: 'home',
  components: {
        HomeHeader,
        HomeBanner,
        HomeIcons,
        HomeHot,
        HomeFooter
    },
    data(){
        return{
            index:{},
            swiperList:[],
            iconList:[],
            recommendList:[],
            weekendList:[],
        }
    },
    created:function(){
        axios.get('http://localhost:8080/static/mock/index.json').then(res=>{
            this.index=res.data.data;
            this.swiperList=this.index.swiperList;
            this.iconList=this.index.iconList;
            this.recommendList=this.index.recommendList;
            this.weekendList=this.index.weekendList;
        })
    }
}
</script>

<style>

</style>