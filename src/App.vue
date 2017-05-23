<template>
  <div>
    <my-header class="fix_top"></my-header>
    <transition name="router-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import MyHeader from './components/common/MyHeader.vue'
  export default {
    components: {
      MyHeader
    }
  }
</script>

<style lang="scss">
  @import "assets/css/common";

  .fix_top {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1999;
  }

  .router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
  }

  .router-fade-enter, .router-fade-leave-active {
    opacity: 0;
  }
</style>
