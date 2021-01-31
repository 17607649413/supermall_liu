<template>
  <div>
    <navbar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>

      <div slot="center" class="title">
        <div class="title-item"
             v-for="(item ,index) in navBar"
             @click="currentNav(index)"
             :class="{isActive:currentIndex===index}">
          {{ item }}
        </div>
      </div>


    </navbar>
  </div>
</template>

<script>
import Navbar from "@/components/common/navbar/Navbar";

export default {
  name: "detailNavBar",
  data() {
    return {
      navBar: ["商品", "参数", "评论", "推荐"],
    }
  },
  props:{
    currentIndex:{
      type:Number,
      default:0
    }
  },
  components: {
    Navbar
  },
  methods: {
    currentNav(index) {
      this.$emit('navSkip',index)
    },
    backClick() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.title {
  display: flex;
  font-size: 13px;
}

.title-item {
  flex: 1;
}

.isActive {
  color: var(--color-high-text)
}

.back img {
  margin-top: 12px;
}

</style>
