<template>
  <div class="product">
    <ProductListItem v-for="(item,index) in items" :item="item" :key="index"/>
  </div>
</template>

<script>

import ProductListItem from "@/components/content/products/ProductListItem";
export default {
  name: "ProductList",
  components:{
    ProductListItem
  },
  props:{
    items:{
      type:Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style scoped>
.product{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}

</style>
