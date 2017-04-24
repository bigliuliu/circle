<template>
  <div>
    <my-header></my-header>
    <el-row :gutter="10" justify="center" type="flex">
      <el-col :xs="6" :sm="5" :md="4" :lg="3"><div class="grid-content bg-purple">
        <avatar></avatar>
        <left-nav class="left_nav"></left-nav>
      </div>
      </el-col>
      <el-col :xs="16" :sm="14" :md="12" :lg="10"><div class="grid-content bg-purple"></div></el-col>
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
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 2px;
  }
  .bg-purple {
    background: #4c74ff;
  }
  .grid-content {
    border-radius: 2px;
    min-height: 1500px;
  }
  .left_nav {
    margin: 10px 3px 3px 3px;
  }
</style>
