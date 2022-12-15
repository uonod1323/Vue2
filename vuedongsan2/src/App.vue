<template>
  

  <Transition name="fade">
    <ProductModal @closeModal ="모달창열렸니=false"
      :productsDetail="productsDetail"
       :warnModalOpen="warnModalOpen"
       :모달창열렸니="모달창열렸니" 
       :누른거="누른거" />
  </Transition>

  <!-- 신고횟수가 5회 넘어가면 경고 모달창 open -->
  <warnModal @closeModal ="warnModalOpen=false" :warnModalOpen="warnModalOpen" :reportNow="reportNow"></warnModal> 


  <div class="menu">
    <div class="menu">
      <a v-for="작명 in 메뉴들" :key="작명">{{작명}}</a>
    </div>
  </div>

  <DiscountProduct :countNumber="countNumber" v-if="showDiscount == true"/>

  <button @click= "priceSort">정렬(낮은가격순)</button>
  <button @click= "priceSortReverse">정렬(높은가격순)</button>
  <button @click= "sortBack">되돌리기</button>
  <button @click= "sortABC">이름순정렬</button>
  
  
    <ProductList @openModal="모달창열렸니=true; 누른거 = i"
    @report="productsDetail[i].report++"
    :productsDetail="productsDetail[i]"
     v-for="(작명,i) in productsDetail" :key="i" >
     </ProductList>
</template>

<script>
import productsDetail from './assets/oneroom.js';
import DiscountProduct from './DiscountProduct.vue';
import ProductModal from './ProductModal.vue';
import ProductList from './ProductList.vue';
import warnModal from './components/warnModal.vue';

export default {
  name : 'App',
  data(){
    return {
      countNumber : 30,
      showDiscount : true,
      productsDetailOriginal : [...productsDetail],
      누른거 : '',
      모달창열렸니 : false,
      warnModalOpen :false,
      메뉴들 : ['Home', 'Shop', 'About'],
      productsDetail : productsDetail,
      reportNow : 0,
    }
  },

  // 협박용 시한폭탄인데 콘솔 존나쳐먹음 뭐냐이새끼?
  // mounted() {
  //   const interval = setInterval(() => {
  //     this.countNumber--;
  //     if (this.countNumber === 0) {
  //       clearInterval(interval);
  //     }
  //   }, 1000);
  // },

  methods : {
    increase(i){
      this.productsDetail[i].report += 1;
    },
    priceSort(){
      this.productsDetail.sort(function(a,b){
        return a.price - b.price;
      });
    },
    priceSortReverse(){
      this.productsDetail.sort(function(a,b){
        return b.price - a.price;
      });
    },
    sortABC(){
      this.productsDetail.sort(function(a,b){
        return a.title.localeCompare(b.title)
      });
    },
    sortBack(){
      this.productsDetail = [...this.productsDetailOriginal];
    }
  },

  watch: {
    모달창열렸니(a){
      if(a == true)
        if(5 <= this.productsDetail[this.누른거].report){
          this.warnModalOpen = true;
          this.reportNow = this.productsDetail[this.누른거].report;
        }
    }
  },

  components: {
    DiscountProduct : DiscountProduct,
    ProductModal : ProductModal,
    ProductList : ProductList,
    warnModal :warnModal
  }
}
</script>

<style>

.fade-enter-from {
  opacity : 0;
}
.fade-enter-active {
  transition: all 0.3s;
}
.fade-enter-to {
  opacity : 1;
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
  position: fixed; padding: 200px;
}
.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
} 
</style>
