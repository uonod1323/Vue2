<template>
    
    <div class="filter-item" :style="{ backgroundImage : `url(${url})`}">
        <slot></slot>
        <button @click="fire">버튼</button>
    </div> 
</template>

<script>
import instaFilter from '../assets/instaFilter.js';

export default {
    data(){
        return{
            instaFilter : instaFilter,
            msg : 'hello'
        }
    },  
    name : 'FilterBox',
    props : {
    url : String,
    },
    methods :{
        fire(){
            this.emitter.emit('작명', '데이터');
        },
    }
}

</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
</style>