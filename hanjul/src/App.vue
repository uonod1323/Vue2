<template>
  <category></category>
  <page></page>
</template>

<script>
// Import the component
import 'bootstrap'
import Category from './components/Category.vue';
import Page from './components/Page.vue';

export default {
  name: 'App',
  data(){
    return {
      currentCategory : 'Home',
    }
  },

  // Register the component
  components: {
    category : Category,
    page : Page
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
}
</style>
