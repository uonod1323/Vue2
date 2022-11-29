<template>
  <div @click="closeModal()" class="black-bg" v-if="모달창열렸니 == true">
  <div class="white-bg">
    <img :src="productsDetail[i].image">
    <h4>{{productsDetail[i].title}}</h4>
    <p>{{productsDetail[i].price}}</p>
  </div>
</div>
</template>

<script>
export default {
    name: 'ProductModal',
    props : {
      productsDetail : Array,
    }
}
</script>

<style>

</style>