<template>
  <category></category>
  <page></page>
</template>

<script>
// Import the component
import 'bootstrap'
import Category from './components/Category.vue';
import Page from './components/Page.vue';
import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://uonod1323:qwer1234@hongodb.rtsccuj.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

export default {
  name: 'App',
  data(){
    return {
      
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
