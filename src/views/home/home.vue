<template>
  <div>
    <Navbar>
      <slot slot="center">购物街</slot>
    </Navbar>
    <HomeSwiper :banner="banner"></HomeSwiper>
    <Recommend :recommend="recommend"></Recommend>
    <fashion></fashion>

    <tabController :items="['流行','新款','精选']"></tabController>

    <ul>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
      <li>3333</li>
    </ul>
  </div>
</template>

<script>

import Navbar from "@/components/common/navbar/Navbar";
import HomeSwiper from "@/views/home/childCommon/HomeSwiper";
import Recommend from "@/views/home/childCommon/Recommend";
import fashion from "@/views/home/childCommon/fashion";

import tabController from "@/components/content/tabController/tabController";
import {getHomeMultidata} from "@/nwtwork/home";
import Tabbar from "@/components/common/tabbar/tabbar";
import TabController from "@/components/content/tabController/tabController";

export default {
  name: "home",
  data() {
    return {
      banner: [],
      recommend: []
    }
  },
  components: {
    TabController,
    Tabbar,
    Navbar,
    HomeSwiper,
    Recommend,
    fashion
  },
  created() {
    getHomeMultidata().then(res => {
      console.log(res);
      this.banner = res.data.banner.list
      this.recommend = res.data.recommend.list
    })
  }
}
</script>

<style scoped>

</style>
