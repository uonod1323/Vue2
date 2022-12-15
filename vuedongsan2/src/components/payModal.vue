<template>
<div class="black-bg" v-if="payModalopen == true">
  <div class="white-bg">
    <h4>영수증</h4>
    <p>매물명 : {{productsDetail[누른거].title}}</p>
    <p>결재금액 : {{price}}</p>
    <button @click="closeModal">돌아가기</button>
  </div>
</div>
</template>

<script>
export default {
  props : {
      payModalopen : String,
      productsDetail : Array,
      누른거 : String,
      price : String
    },
    methods : {
      closeModal(){
        this.$emit('closeModal');
      },
    },
}
</script>

<style>

</style>