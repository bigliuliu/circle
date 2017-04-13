<template>
  <div class="home_container">
    <itemcontainer father-component="home"></itemcontainer>
  </div>
</template>

<script>
  import Itemcontainer from '../Itemcontainer'
  export default {
    name: 'home',
    components: {
      Itemcontainer
    },
    created () {

    }
  }
</script>

<style lang="scss" scoped>
  .home_container{
  }
</style>
