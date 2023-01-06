<template>
<div>
    <div v-if="step == 0">
      <postList v-for="(arrays, i) in instaData" :key="i" :instaData="instaData[i]"/>
    </div>

    <!-- 필터선택페이지 -->
  <div  v-if="step == 1">
    <div class="upload-image" :class="[nowFilter]" :style="{ backgroundImage : `url(${url})`}"></div>
    <div class="filters">
      <FilterBox @click="applyFilter(instaFilter[i])" :class="[instaFilter[i]]" v-for="(arrays, i) in instaFilter" :key="i" :url="url">
        <span>{{instaFilter[i]}}</span>
      </FilterBox>
    </div>
  </div>

  <!-- 글작성페이지 -->
  <div v-if="step == 2">
    <div class="upload-image" :class="[nowFilter]" :style="{ backgroundImage : `url(${url})`}"></div>
    <div class="write">
      <textarea @input="$emit('write', $event.target.value)" class="write-box">write!</textarea>
    </div>
  </div>

  <!-- 팔로워 페이지 -->
  <div v-if="step == 3">
    <MyPage :one="1" :two="2"/>
  </div>

</div>
</template>

<script>
import postList from './PostList.vue'
import FilterBox from  './FilterBox.vue'
import MyPage from  './MyPage.vue'
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
      nowFilter : '',
    }
  },
  methods:{
    applyFilter(filter){
        this.nowFilter = filter;
        this.emitter.emit('applyFilter', filter);
        },
  },
  components: {
    postList : postList,
    FilterBox: FilterBox,
    MyPage : MyPage,
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