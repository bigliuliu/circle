<template>
  <el-dropdown>
    <el-button type="primary">更多菜单<i class="el-icon-caret-bottom el-icon--right"></i>
    </el-button>
    <el-dropdown-menu slot="dropdown">
      <div v-if="user" class="small">
        <el-dropdown-item>登出</el-dropdown-item>
      </div>
      <div v-else>
        <el-dropdown-item class="small">登录</el-dropdown-item>
        <el-dropdown-item class="small">注册</el-dropdown-item>
      </div>
    </el-dropdown-menu>
  </el-dropdown>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState(['user'])
    }
  }
</script>
<style lang="scss" scoped>
  .small {
    font-size: 18px;
    text-align:center;
    padding:0px;
    vertical-align:middle
  }
</style>
