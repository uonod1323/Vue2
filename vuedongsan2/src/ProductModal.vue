<template>
<payModal @closeModal ="payModalopen=false" :payModalopen="payModalopen" :productsDetail="productsDetail" :누른거="누른거" :price="price"  />
<div class="black-bg" v-if="모달창열렸니 == true">
  <div class="white-bg">
    <img :src="productsDetail[누른거].image">
    <h4>{{productsDetail[누른거].title}}</h4>
    <p>{{productsDetail[누른거].content}}</p>
    <input v-model.number="month">
    <p> {{month}}개월 선택함 : {{productsDetail[누른거].price * month}}</p>
    <button @click="closeModal">닫기</button>
    <button @click ="openPayModal">결제</button>
  </div>
</div>
</template>

<script>
import payModal from './components/payModal.vue';



export default {
    name: 'ProductModal',
    data(){
      return{
        month : 1, 
        payModalopen : false,
        price : 0,
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
      누른거 : String,
      warnModalOpen : String
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
      },
      openPayModal(){
        this.payModalopen = true;
        this.price = this.productsDetail[this.누른거].price * this.month
        this.closeModal();
      },
    },
    components: {
      payModal : payModal
    }
}
</script>

<style>

</style>