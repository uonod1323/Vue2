<template>
  <div>
    컨테이너임
    <postList :instaData="instaData[0]"/>
    <postList :instaData="instaData[1]"/>
    <postList :instaData="instaData[2]"/>
  </div>
</template>

<script>
import postList from './PostList.vue'

export default {
  name: 'ContainerForm',
  props : {
    instaData : Array,
    },
  data(){
    return{

    }
  },
  
  components: {
    postList : postList,
  }
}
</script>

<style>

</style>