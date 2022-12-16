<template>
  <div>
    <h4>상세페이지</h4>
    <h5>{{TitleListArray[$route.params.id].title}}</h5>
    <p>{{TitleListArray[$route.params.id].content}}</p>
  </div>
</template>

<script>
export default {
    name: 'DetailList',
    props: {
      TitleListArray : Array,
    }
}
</script>

<style>

</style>