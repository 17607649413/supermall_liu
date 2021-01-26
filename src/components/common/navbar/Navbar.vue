<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>

.nav-bar {
  display: flex;
  text-align: center;
  line-height: 40px;
  height: 40px;

}

.left {
  width: 60px;
}
.right{
  width: 60px;
}
.center{
  flex: 1;
}

</style>
