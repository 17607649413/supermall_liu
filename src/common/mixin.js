import {debounce} from "@/common/utils/debounce";
import BackTop from "@/components/content/backtop/BackTop";
export const itemImglistenerMixin ={
  data(){
    return {
      itemImglistener: null
    }
  },
  mounted() {
    //better滚动的bug使用消息总线解决
    //调用防抖动函数
    const refresh = debounce(  this.$refs.scroll.itemImgLoad,100)

    this.itemImglistener = refresh
    this.$bus.$on("itemImgLoad",this.itemImglistener)
  }
}
export const  backTopMixin = {
  components:{
    BackTop
  },
  data() {
    return {
      isShow:false,//是否显示悬浮箭头
    }
  },
  methods:{
    backTopClick(){
      this.$refs.scroll.scrollTo(0, 0)
    }
  }
}
