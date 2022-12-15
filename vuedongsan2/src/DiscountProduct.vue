<template>
    <div class = "discount">
        <h4>지금바로 결재 안하면 {{countNumber}} 초 후에 니집 폭발함</h4>
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
