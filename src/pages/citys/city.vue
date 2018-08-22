<template>
    <div class="city">
        <city-header ></city-header>
        <city-search :cityList='cityList'></city-search>
        <city-hot :hotList='hotList'></city-hot>
        <city-list :cityList='cityList'></city-list>
    </div>
</template>
<script>
import CityHeader from "./components/header";
import CitySearch from "./components/search";
import CityHot from "./components/hot";
import CityList from "./components/list";
import axios from "axios";
export default {
  name: "city",
  components: {
    CityHeader,
    CitySearch,
    CityHot,
    CityList
  },
  created: function() {
    axios.get("http://localhost:8080/static/mock/city.json").then(res => {
      console.log(res.data);
      this.list = res.data.data;
      this.cityList = this.list.cities;
      this.hotList = this.list.hotCities;
    });
  },
  data() {
    return {
      hotList: [],
      cityList: [],
      list: []
    };
  }
};
</script>
