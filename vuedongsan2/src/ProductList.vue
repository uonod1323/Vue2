<template>
  <div>
    <img :src="productsDetail.image">
    <h4 @click="함수">{{productsDetail.title}}</h4>
    <p>{{productsDetail.price}}원</p>
  </div>
</template>

<script>
export default {
    name: 'ProductList',
    props : {
      productsDetail : Object,
    },
    methods : {
      함수(){
        this.$emit('openModal', this.productsDetail.id)
      }
    }
}
</script>

<style>

</style>