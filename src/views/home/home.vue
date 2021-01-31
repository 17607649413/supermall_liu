<template>
  <div id="home">
    <Navbar class="home-nav">
      <slot slot="center">购物街</slot>
    </Navbar>
    <scroll class="content"
            ref="scroll"
            @scroll="currentletlon" :probeType="3"
            :pullUpLoad="isUpLoadMore" @pullUpLoad="loadMore">
      <HomeSwiper :banner="banner"></HomeSwiper>
      <Recommend :recommend="recommend"></Recommend>
      <fashion></fashion>
      <tabController class="tab-control" :items="['流行','新款','精选']" @tabClick="tabClick"></tabController>
      <ProductList :items="product[currentType].list" ></ProductList>
    </scroll>
    <BackTop @click.native="backTopClick" v-show="isShow"></BackTop>


  </div>
</template>

<script>

import Navbar from "@/components/common/navbar/Navbar";
import HomeSwiper from "@/views/home/childCommon/HomeSwiper";
import Recommend from "@/views/home/childCommon/Recommend";
import fashion from "@/views/home/childCommon/fashion";
import tabController from "@/components/content/tabController/tabController";
import ProductList from "@/components/content/products/ProductList";
import scroll from "@/components/common/scroll/scroll";

import {getHomeMultidata,getHomePageProduct} from "@/nwtwork/home";
import {itemImglistenerMixin,backTopMixin} from "@/common/mixin";

export default {
  name: "home",
  mixins:[itemImglistenerMixin,backTopMixin],
  data() {
    return {
      banner: [],
      recommend: [],
      product:{
        pop:{'page':0,'list':[]},
        new:{'page':0,'list':[]},
        sell:{'page':0,'list':[]},
      },
      currentType:'pop',
      isUpLoadMore:true//better-scroll是否开启上拉加载
    }
  },
  components: {
    Navbar,
    HomeSwiper,
    Recommend,
    fashion,
    tabController,
    ProductList,
    scroll,
  },
  created() {
    this.getHomeMultidata();
    this.getHomePageProduct('pop');
    this.getHomePageProduct('new');
    this.getHomePageProduct('sell');

  },
  deactivated() {
    this.$bus.$off("itemImgLoad",this.itemImglistener)
  },

  mounted() {

  },
  methods:{
    tabClick(index){
      switch (index){
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      }
    },

    getHomeMultidata(){
      getHomeMultidata().then(res => {
        this.banner = res.data.banner.list
        this.recommend = res.data.recommend.list
      })
    },
    getHomePageProduct(type){
      const page = this.product[type].page+1;
      getHomePageProduct(type,page).then(res=>{
        this.product[type].list.push(...res.data.list)
        this.product[type].page = page;

        // this.$refs.scroll.finish()
      })
    },

    currentletlon(position){
      this.isShow = -position.y>1000
    },

    loadMore(){
      this.getHomePageProduct(this.currentType)
    }
  }
}
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: relative;
  z-index: 9;
}

.tab-control {
  position: relative;
  z-index: 9;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
