<template>
  <div class="start end">
  <ProductModal @closeModal ="모달창열렸니=false"  :productsDetail="productsDetail" :모달창열렸니="모달창열렸니" :누른거="누른거"></ProductModal>
</div>
  <div class="menu">
    <div class="menu">
      <a v-for="작명 in 메뉴들" :key="작명">{{작명}}</a>
    </div>
  </div>

  <DiscountProduct :productsDetail="productsDetail"></DiscountProduct>
  
  
    <ProductList @openModal="모달창열렸니=true; 누른거 = i" :productsDetail="productsDetail[i]" v-for="(작명,i) in productsDetail" :key="i" ></ProductList>
</template>

<script>
import productsDetail from './assets/oneroom.js';
import DiscountProduct from './DiscountProduct.vue';
import ProductModal from './ProductModal.vue';
import ProductList from './ProductList.vue';

export default {
  name : 'App',
  data(){
    return {
      누른거 : '',
      모달창열렸니 : false,
      메뉴들 : ['Home', 'Shop', 'About'],
      productsDetail : productsDetail,
    }
  },

  methods : {
    increase(i){
      this.productsDetail[i].report += 1;
    },
  },

  components: {
    DiscountProduct : DiscountProduct,
    ProductModal : ProductModal,
    ProductList : ProductList
  }
}
</script>

<style>
.start{
  opacity: 0;
  transition: all 1s;
}
.end{
  opacity: 1;
}
.discount {
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.menu {
  background : darkslateblue;
  padding : 15px;
  border-radius : 5px;
}
.menu a {
  color : white;
  padding : 10px;
}
img {
  width: 300px;
}
body {
  margin : 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%; height:100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}
.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
} 
</style>
