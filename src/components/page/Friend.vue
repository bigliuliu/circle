<template>
  <div class="flex_box right-content"></div>
</template>
<script>
  export default {
  }
</script>
<style lang="scss" scoped>
  .right-content {
    background: linear-gradient(160deg, rgba(204,232,207,0.9), rgba(30,144,255,0.1));
    min-height: 95vh;
    /*height: 95vh;*/
    overflow: scroll;
    border-radius: 5px;
  }

  .flex_box {
    display: flex;
    justify-content: center;
  }
</style>
