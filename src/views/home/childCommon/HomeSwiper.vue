<template>
<div>
  <Swiper>
    <SwiperItem v-for="item in banner">
      <a :href="item.link">
        <img :src="item.image">
      </a>
    </SwiperItem>
  </Swiper>
</div>
</template>

<script>
import {Swiper,SwiperItem} from "@/components/common/swiper/index"


export default {
  name: "HomeSwiper",
  components:{
    SwiperItem,
    Swiper
  },
  props:{
    banner:Array
  }
}
</script>

<style scoped>

</style>
