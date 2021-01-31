<template>
<div class="wrapper" ref="wrapper" >
  <div  >
    <slot></slot>
  </div>
</div>
</template>

<script>
import BScroll from'better-scroll'

export default {
  name: "scroll",
  data(){
    return {
      scroll:null,
    }
  },
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default: false
    }
  },

  mounted() {
    //创建scroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      // bindToWrapper: true,
      probeType:this.probeType,

      // pullUpLoad:this.pullUpLoad
      // 是否派发滚动到底部的事件，用于上拉加载
      pullup:this.pullUpLoad

    })
    console.log(this.scroll)

    if (this.probeType==2 || this.probeType==3){
      this.scroll.on('scroll',(position)=>{
        this.$emit('scroll',position)
      })
    }
    if (this.pullUpLoad) {
      this.scroll.on('scrollEnd',()=>{
        // 滚动到底部
        if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
          this.$emit('pullUpLoad')
        }
      })
    }

  },
  methods:{
    scrollTo(x=0,y,time=200){
      this.scroll && this.scroll.scrollTo(x,y,time)
    },
    itemImgLoad(){
      this.scroll && this.scroll.refresh()
    },
    finish(){
      this.scroll.finishPullUp()
    }



  }
}
</script>

<style scoped>
.wrapper{
  overflow: hidden;

}
</style>
