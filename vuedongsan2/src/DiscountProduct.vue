<template>
    <div class = "discount">
        <h4>지금 결재하면 {{countNumber}}% 할인</h4>
    </div>
</template>

<script>
export default {
    name: 'countNumber',
    props : {
        countNumber : String,
    },
    data(){
        return{
        }
    }
}
</script>

<style>
</style>
