<template>
  <div>아무튼 디테일 페이지 입니다.</div>
  <div>
    <h5>{{this.TitleListArray.title}}</h5>
    <p>{{this.TitleListArray.content}}</p>
    <p>{{this.TitleListArray.date}}</p>
  </div>
</template>

<script>
export default {
    name: 'TitleList',
    props: {
      TitleListArray : Array,
    }
}
</script>

<style>

</style>