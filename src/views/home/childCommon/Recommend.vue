<template>
  <div class="recommend">
    <div v-for="item in recommend" class="recommend-item">
      <a :href="item.link"><img :src="item.image"></a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  props:{
    recommend:Array
  }
}
</script>
.
<style scoped>
.recommend{
  display: flex;
  text-align: center;
  margin-top: 10px;
  font-size: 12px;
  padding: 10px;
  border-bottom: 8px solid #eee;
}
.recommend-item img{
  width: 65px;
  height: 65px;
}
.recommend-item{
  flex: 1;
}
</style>
