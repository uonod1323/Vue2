<template>
  <div>
    <postList v-for="(arrays, i) in instaData" :key="i" :instaData="instaData[i]"/>

    <!-- 필터선택페이지 -->
  <div class="upload-image"></div>
  <div class="filters">
    <div class="filter-1"></div>
    <div class="filter-1"></div>
    <div class="filter-1"></div>
    <div class="filter-1"></div>
    <div class="filter-1"></div>
  </div>

<!-- 글작성페이지 -->
  <div class="upload-image"></div>
  <div class="write">
    <textarea class="write-box">write!</textarea>
  </div>

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