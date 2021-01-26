<template>
  <div>
    <Navbar>
      <slot slot="center">购物街</slot>
    </Navbar>
    <HomeSwiper :banner="banner"></HomeSwiper>
    <Recommend :recommend="recommend"></Recommend>
    <fashion></fashion>
  </div>
</template>

<script>

import Navbar from "@/components/common/navbar/Navbar";
import HomeSwiper from "@/views/home/childCommon/HomeSwiper";
import Recommend from "@/views/home/childCommon/Recommend";
import fashion from "@/views/home/childCommon/fashion";
import {getHomeMultidata} from "@/nwtwork/home";

export default {
  name: "home",
  data() {
    return {
      banner: [],
      recommend: []
    }
  },
  components: {
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
