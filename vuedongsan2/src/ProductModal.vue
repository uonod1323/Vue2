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
        const reg = /[^0-9]/g;
          if(reg.exec(a)!==null) {
            alert('숫자만 입력가능합니다!');
            this.month = 1;
            return;
          }
      }
      },
    props : {
      productsDetail : Array,
      모달창열렸니 : String,
      누른거 : String
    },
    
    updated() {
      const interval = setInterval(() => {
      if(this.month == 2){
        alert("2개월은 안받아요");
        this.month = 1;
      }else{
        clearInterval(interval);
      }
      }, 500);
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