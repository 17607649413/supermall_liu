<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav" @navSkip="navSkip" :currentIndex="currentIndex"></detail-nav-bar>
    <scroll class="content" ref="scroll" :probeType="3" @scroll="scroll">
      <detail-swiper :topImages="topImages" @imgLoad="imgLoad"></detail-swiper>
      <DetailBaseInfo :goods="goods"></DetailBaseInfo>
      <DetailShopInfo :shop="shopInfo"></DetailShopInfo>
      <DetailGoodsInfo :detailInfo="detailInfo" @imgLoad="imgLoad"></DetailGoodsInfo>
      <detail-param-info :paramInfo="paramInfo" ref="paramInfo"></detail-param-info>
      <detail-comment-info :comment-info="commentInfo" ref="commentInfo"></detail-comment-info>
      <product-list :items="productList" ref="recommend"></product-list>
    </scroll>
    <DetailBottomBar></DetailBottomBar>
    <back-top @click.native="backTopClick" v-show="isShow"></back-top>
  </div>
</template>

<script>
import detailNavBar from "@/views/detail/child/detailNavBar";
import detailSwiper from "@/views/detail/child/detailSwiper";
import DetailBaseInfo from "@/views/detail/child/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/child/DetailShopInfo";
import DetailGoodsInfo from "@/views/detail/child/DetailGoodsInfo";
import DetailParamInfo from "@/views/detail/child/DetailParamInfo";
import DetailCommentInfo from "@/views/detail/child/DetailCommentInfo";
import ProductList from "@/components/content/products/ProductList";
import DetailBottomBar from "@/views/detail/child/DetailBottomBar";

import scroll from "@/components/common/scroll/scroll";

import {getDetailData, Goods, Shop, GoodsParam, getProductList} from "@/nwtwork/detail";
import {itemImglistenerMixin,backTopMixin} from "@/common/mixin";
import {debounce} from "@/common/utils/debounce";

export default {
  name: "detail",
  mixins: [itemImglistenerMixin,backTopMixin],
  data() {
    return {
      iid: '',
      topImages: [],
      goods: {},
      shopInfo: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      productList: [],
      navSkipY: [],//记录跳转的y值
      navSkipFun: null,
      currentIndex: 0

    }
  },
  components: {
    detailSwiper,
    detailNavBar,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    ProductList,
    DetailBottomBar,
    scroll
  },
  created() {
    //保存传入的id
    this.iid = this.$route.params.id
    //根据id请求数据
    getDetailData(this.iid).then(res => {
      const data = res.result

      this.topImages = data.itemInfo.topImages
      //获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);

      //店铺信息
      this.shopInfo = new Shop(data.shopInfo)
      //详细信息
      this.detailInfo = data.detailInfo
      //参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

      //评论信息
      if (data.rate.list) {
        this.commentInfo = data.rate.list[0];
      }

    })
    //请求推荐商品数据
    getProductList().then(res => {
      this.productList = res.data.list
    })

    //图片加载记录y值
    this.navSkipFun = debounce(() => {
      this.navSkipY = []
      this.navSkipY.push(0)
      this.navSkipY.push(this.$refs.paramInfo.$el.offsetTop - 30)
      this.navSkipY.push(this.$refs.commentInfo.$el.offsetTop - 30)
      this.navSkipY.push(this.$refs.recommend.$el.offsetTop - 30)
      this.navSkipY.push(this.$refs.recommend.$el.offsetTop + 1000)

    }, 50)
  },

  methods: {
    imgLoad() {
      this.navSkipFun()
      this.$refs.scroll.itemImgLoad()
    },
    navSkip(index) {
      this.$refs.scroll.scrollTo(0, -this.navSkipY[index])
    },
    scroll(positoiny) {
      this.isShow = -positoiny.y>1000
      let navSkipY = this.navSkipY;
      let y = -positoiny.y
      for (let i = 0; i <= this.navSkipY.length - 1; i++) {
        if (navSkipY[i] <= y && y < navSkipY[i + 1]) {
          if (this.currentIndex !== i) {
            this.currentIndex = i;
          }
          break
        }
      }
    },
  }
}
</script>

<style scoped>
.detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}

.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}

.content {
  height: calc(100% - 44px);

}
</style>
