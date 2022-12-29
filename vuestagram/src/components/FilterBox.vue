<template>
    
    <div class="filter-item" :style="{ backgroundImage : `url(${url})`}">
        <slot></slot>
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