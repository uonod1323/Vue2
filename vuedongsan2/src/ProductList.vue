<template>
  <div v-for="(작명, i) in productsDetail" :key="i">
    <img @click="showDetailModal(i)" :src="productsDetail[i].image">
    <h4 @click="showDetailModal(i)">{{productsDetail[i].title}}</h4>
    <p>{{productsDetail[i].price}}</p>
    <button @click="increase(i)">허위매물신고</button>
    <span>신고수 : {{productsDetail[i].report}}</span>
  </div>
</template>

<script>
export default {
    name: 'ProductList',
    props : {
      productsDetail : Array,
    }
}
</script>

<style>

</style>