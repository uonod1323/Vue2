<template>
  <div>
    <h5 @click="$router.push('/detail/'+누른거)">{{this.TitleListArray.title}}</h5>
    <p>{{this.TitleListArray.content}}</p>
    <p>{{this.TitleListArray.date}}</p>
  </div>
</template>

<script>
export default {
    name: 'TitleList',
    props: {
      TitleListArray : Array,
      누른거 : String,
    }
}
</script>

<style>

</style>