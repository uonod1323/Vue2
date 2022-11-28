<template>
<div class="menu">
  <div class="menu">
    <a v-for="(작명,i) in 메뉴들[0]" :key="i">{{작명}}</a>
  </div>
</div>
<div>
  <h4>{{products[0]}}</h4>
  <p>50만원</p>
</div>
<div>
  <h4>{{products[1]}}</h4>
  <p>50만원</p>
</div>
<div>
  <h4>{{products[2]}}</h4>
  <p>50만원</p>
</div>
</template>

<script>

export default {
  name : 'App',
  data(){
    return {
      products : ['역삼동원룸', '천호동원룸', '마포구원룸'],
      메뉴들 : [{menu1 : 'Home', menu2 : 'Shop', menu3 : 'About'}, {menu1 : 'what', menu2 : 'the', menu3 : 'fuck'}],
      price1 : 60,
      price2 : 50,
      price3 : 40,
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
