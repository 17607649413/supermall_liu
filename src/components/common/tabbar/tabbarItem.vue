<template>
    <div class="tabbar-item" @click="btnClick">
      <div>
        <slot v-if="!isActive" name="icon"></slot>
        <slot v-else name="active-icon"></slot>
      </div>
      <div :class="{active:isActive}">
        <slot name="text"></slot>
      </div>
    </div>
</template>

<script>
export default {
  name: "tabbarItem",
  props:{
    path:String
  },
  data(){
    return{
      // isActive:false
    }
  },
  methods:{
    btnClick(){
      this.$router.push(this.path)
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) != -1
    }
  }
}
</script>

<style scoped>
.tabbar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}
.tabbar-item img{
  width: 24px;
  height: 24px;
  margin-top: 5px;
  vertical-align: middle;
}
.tabbar-item text{
  font-size: 12px;
  margin-top: 3px;
  color: #333;
}
.active{
  color: #FF0000;
}
</style>