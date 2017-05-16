<template>
  <div>
    <my-header class="fix_top"></my-header>
    <el-row :gutter="10" justify="center" type="flex">
      <el-col :xs="6" :sm="5" :md="4" :lg="3">
        <div class="grid-content bg-purple">
          <avatar></avatar>
          <left-nav class="left_nav"></left-nav>
        </div>
      </el-col>
      <el-col :xs="16" :sm="14" :md="12" :lg="10">
        <div class="grid-content bg-purple">
          <router-view></router-view>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import MyHeader from '../common/MyHeader.vue'
  import Avatar from '../common/Avatar.vue'
  import LeftNav from '../common/LeftNav.vue'
  export default {
    components: {
      MyHeader, LeftNav, Avatar
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/css/mixin';

  .el-row {
    margin-bottom: 0px;
    top: 45px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .el-col {
    border-radius: 2px;
  }

  .bg-purple {
    background: #1D8CE0;
  }

  .grid-content {
    border-radius: 2px;
    min-height: 1000px;
    height: 100%;
  }

  .left_nav {
    margin: 10px 15px 3px 3px;
  }
  .fix_top {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1999;
  }
</style>
