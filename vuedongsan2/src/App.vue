<template>
<div class="menu">
  <div class="menu">
    <a v-for="작명 in 메뉴들" :key="작명">{{작명}}</a>
  </div>
</div>
<div v-for="(작명, i) in productsDetail" :key="i">
  <h4>{{productsDetail[i].products}}</h4>
  <p>{{productsDetail[i].price}}</p>
</div>
</template>

<script>

export default {
  name : 'App',
  data(){
    return {
      products : ['역삼동원룸', '천호동원룸', '마포구원룸'],
      메뉴들 : ['Home', 'Shop', 'About'],
      price : ['60', '50', '40'],
      productsDetail : [
        {products : '역삼동원룸', price : '60'},
        {products : '천호동원룸', price : '50'},
        {products : '마포구원룸', price : '40'}
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
</style>
