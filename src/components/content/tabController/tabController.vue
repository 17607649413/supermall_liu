<template>

  <div class="tabController">
    <div v-for="(item,index) in items" :class="{active:current==index}" @click="btnClick(index)">
      <span>{{ item }}</span>
    </div>

  </div>
</template>

<script>
export default {
  name: "tabController",
  data() {
    return {
      current: 0
    }
  },
  props: {
    items: Array
  },
  methods: {
    btnClick(index) {
      this.current = index;
    }
  }
}
</script>

<style scoped>
.tabController {
  display: flex;
  text-align: center;
  font-size: 14px;
  height: 40px;
  line-height: 40px;
}

.tabController div{
  flex: 1;
}

.active span {
  color: var(--color-high-text);
  border-bottom: 3px solid var(--color-tint);
}
</style>
