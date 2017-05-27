<template>
  <div>
    <el-row :gutter="6" justify="center" type="flex">
      <el-col :xs="6" :sm="5" :md="4" :lg="3" id="leftnav">
        <div class="left-content">
          <avatar></avatar>
          <left-nav class="left_nav"></left-nav>
        </div>
      </el-col>
      <el-col :xs="18" :sm="16" :md="14" :lg="10">
          <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Avatar from '../common/Avatar.vue'
  import LeftNav from '../common/LeftNav.vue'
  export default {
    components: {
      LeftNav, Avatar
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/css/mixin';
  .el-row {
    margin-bottom: 0;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .left-content {
    border-radius: 5px;
  }

  .left-content {
    height: 100%;
  }

  .left_nav {
    margin: 10px 5px 3px 3px;
    background: linear-gradient(120deg, rgba(47, 57, 56, 0.87), rgba(204,232,207,0.1));
    /*background-color: #cce8cf;*/
    color: #131313;
    border-radius: 10px;
  }
</style>
