<template>
  <div>
    <itemcontainer father-component="item"></itemcontainer>
  </div>
</template>

<script>
  import Itemcontainer from '../Itemcontainer'
  export default {
    name: 'item',
    components: {
      Itemcontainer
    },
    created () {
      this.$store.commit('REMBER_TIME')
    }
  }
</script>

<style lang="scss">

</style>
