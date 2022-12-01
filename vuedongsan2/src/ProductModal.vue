<template>
  <div class="black-bg" v-if="모달창열렸니 == true">
  <div class="white-bg">
    <img :src="productsDetail[누른거].image">
    <h4>{{productsDetail[누른거].title}}</h4>
    <input v-model.number="month">
    <p> {{month}}개월 선택함 : {{productsDetail[누른거].price * month}}</p>
    <button @click="closeModal">닫기</button>
  </div>
</div>
</template>

<script>
export default {
    name: 'ProductModal',
    data(){
      return{
        month : 1, 
      }
    },
    watch : {
      month(a){
        if(13 <= a){
          alert('13이상입력ㄴㄴ해');
        }
      },
    },
    props : {
      productsDetail : Array,
      모달창열렸니 : String,
      누른거 : String
    },
    methods : {
      closeModal(){
        this.$emit('closeModal');
      }
    }
}
</script>

<style>

</style>