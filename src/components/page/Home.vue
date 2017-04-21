<template>
  <div>
    <my-header>
      <span slot='logo' class="head_logo" @click="reload">circle</span>
    </my-header>
    <el-row :gutter="0" justify="center" type="flex">
      <el-col :xs="6" :sm="5" :md="4" :lg="3"><div class="grid-content bg-purple"></div></el-col>
      <el-col :xs="16" :sm="14" :md="12" :lg="10"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
  </div>
</template>

<script>
  import MyHeader from '../common/MyHeader'
  export default {
    components: {
      MyHeader
    },
    methods: {
      // 点击图标刷新页面
      reload () {
        window.location.reload()
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/css/mixin';
  .head_logo {
    @include font(12,36px)
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 2px;
  }
  .bg-purple {
    background: #171a85;
  }
  .grid-content {
    border-radius: 2px;
    min-height: 300px;
  }
</style>
