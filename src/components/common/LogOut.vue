<template>
  <el-dropdown @command="handleCommand">
    <el-button type="primary">更多菜单<i class="el-icon-caret-bottom el-icon--right"></i>
    </el-button>
    <el-dropdown-menu slot="dropdown"  class="small">
      <div v-if="user.id">
        <el-dropdown-item command="/logout">登出</el-dropdown-item>
      </div>
      <div v-else>
        <el-dropdown-item command="/login">登录</el-dropdown-item>
        <el-dropdown-item command="/registry">注册</el-dropdown-item>
      </div>
    </el-dropdown-menu>
  </el-dropdown>
</template>
<script>
  import { mapState } from 'vuex'
  export default {
    computed: {
      ...mapState(['user'])
    },
    methods: {
      handleCommand (command) {
        this.$router.push(command)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .small {
    font-size: 18px;
    text-align: center;
    vertical-align: middle;
    border-radius: 6px;
  }
</style>
