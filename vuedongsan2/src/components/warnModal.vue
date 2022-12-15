<template>
  <div class="black-bg" v-if="warnModalOpen == true">
    <div class="white-bg">
        <p>"해당 매물은 허위매물 의심신고가 {{reportNow}}건 이상 누적되었습니다. 사기 당해도 알빠임? 계속 보시겠습니까?"</p>
        <button>네</button>
        <button>아니오</button>
    </div>
  </div>
</template>

<script>
export default {
  props : {
    warnModalOpen : String,
    reportNow : String
    },
    methods : {
      closeModal(){
        this.$emit('closeModal');
      },
    },
}
</script>

<style>

</style>