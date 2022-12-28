<template>
<div>
    <div v-if="step == 0">
      <postList v-for="(arrays, i) in instaData" :key="i" :instaData="instaData[i]"/>
    </div>

    <!-- 필터선택페이지 -->
  <div  v-if="step == 1">
    <div class="upload-image" :style="{ backgroundImage : `url(${url})`}"></div>
    <div class="filters">
      <FilterBox v-for="(arrays, i) in instaFilter" :key="i" :url="url"></FilterBox>
    </div>
  </div>

  <!-- 글작성페이지 -->
  <div v-if="step == 2">
    <div class="upload-image" :style="{ backgroundImage : `url(${url})`}"></div>
    <div class="write">
      <textarea @input="$emit('write', $event.target.value)" class="write-box">write!</textarea>
    </div>
  </div>

</div>
</template>

<script>
import postList from './PostList.vue'
import FilterBox from  './FilterBox.vue'
import instaFilter from '../assets/instaFilter.js';

export default {
  name: 'ContainerForm',
  props : {
    instaData : Array,
    step : Number,
    url : String,
    },
  data(){
    return{
      instaFilter : instaFilter,
    }
  },
  components: {
    postList : postList,
    FilterBox: FilterBox,
  }
}
</script>

<style>
  .upload-image{
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size : cover;
  }
  .filters{
  overflow-x:scroll;
  white-space: nowrap;
  }
  .filters::-webkit-scrollbar {
  height: 5px;
  }
  .filters::-webkit-scrollbar-track {
  background: #f1f1f1; 
  }
  .filters::-webkit-scrollbar-thumb {
  background: #888; 
  border-radius: 5px;
  }
  .filters::-webkit-scrollbar-thumb:hover {
  background: #555; 
  }
  .write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
  }
</style>