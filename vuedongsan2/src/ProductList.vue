<template>
  <div>
    <img :src="productsDetail.image">
    <h4 @click="함수">{{productsDetail.title}}</h4>
    <p>{{productsDetail.price}}원</p>
    <p>허위매물신고수 : {{productsDetail.report}}</p>
    <button @click="너깜빵">신고멕이기</button>
  </div>
  <br/>
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
      },
      너깜빵(){
        this.$emit('report')
      }
    }
}
</script>

<style>

</style>