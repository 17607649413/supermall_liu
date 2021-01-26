<template>
  <tabbar>
    <tabbar-item path="/home">
      <img src="~assets/img/tabbar/home.svg" slot="icon" alt="">
      <img src="~assets/img/tabbar/home_active.svg" slot="active-icon" alt="">
      <div slot="text">首页</div>
    </tabbar-item>
    <tabbar-item path="/category">
      <img src="~assets/img/tabbar/category.svg" slot="icon" alt="">
      <img src="~assets/img/tabbar/category_active.svg" alt=""  slot="active-icon">
      <div slot="text">分类</div>
    </tabbar-item>
    <tabbar-item path="cart"><img src="~assets/img/tabbar/shopcart.svg" slot="icon" alt="">
      <img src="~assets/img/tabbar/shopcart_active.svg" alt=""  slot="active-icon">
      <div slot="text">购物车</div>
    </tabbar-item>
    <tabbar-item path="profile">
      <img src="~assets/img/tabbar/profile.svg" slot="icon" alt="">
      <img src="~assets/img/tabbar/profile_active.svg" alt=""  slot="active-icon">
      <div slot="text">我的</div>
    </tabbar-item>
  </tabbar>

</template>

<script>
import tabbar from "@/components/common/tabbar/tabbar";
import tabbarItem from "@/components/common/tabbar/tabbarItem";

export default {
  name: "MainTabbar",
  components:{
    tabbarItem,
    tabbar
  }
}
</script>

<style scoped>

</style>
