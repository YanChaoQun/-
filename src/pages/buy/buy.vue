<template>
    <div class="buy">
        <buy-header></buy-header>
        <buy-banner :sightName='sightName' :bannerImg='bannerImg' :gallaryImgs='gallaryImgs'></buy-banner>
        <buy-list :categoryList='categoryList'></buy-list>
    </div>
</template>
<script>
import BuyHeader from './components/header';
import BuyBanner from './components/banner';
import BuyList from './components/list';
import axios from 'axios'
export default {
    name:'buy',
    components:{
        BuyHeader,
        BuyBanner,
        BuyList
    },
    data(){
        return{
            detailList:[],
            sightName:'',
            bannerImg:'',
            gallaryImgs:[],
            categoryList:[]
        }
    },
      created: function() {
    axios.get("http://localhost:8080/static/mock/detail.json").then(res => {
      console.log(res.data);
      this.detailList = res.data.data;
      this.sightName=this.detailList.sightName;
      this.bannerImg=this.detailList.bannerImg;
      this.gallaryImgs=this.detailList.gallaryImgs;
      this.categoryList=this.detailList.categoryList;
    });
  },
}
</script>

