<template>
  <el-dropdown @command="handleCommand">
    <el-button type="primary">更多菜单<i class="el-icon-caret-bottom el-icon--right"></i>
    </el-button>
    <el-dropdown-menu slot="dropdown"  class="small">
      <div v-if=userInfo.user_id>
        <el-dropdown-item command="/logout">登出<icon name="sign-out"></icon></el-dropdown-item>
      </div>
      <div v-else>
        <el-dropdown-item command="/login">登录<icon name="sign-in"></icon></el-dropdown-item>
        <el-dropdown-item command="/registry">注册<icon name="registered"></icon></el-dropdown-item>
      </div>
    </el-dropdown-menu>
  </el-dropdown>
</template>
<script>
  import 'vue-awesome/icons/sign-in'
  import 'vue-awesome/icons/sign-out'
  import 'vue-awesome/icons/registered'
  import { mapState } from 'vuex'
  export default {
    computed: {
      ...mapState({
        userInfo: state => state.userInfo.userInfo
      })
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
    border: none;
    font-size: 18px;
    text-align: center;
    vertical-align: middle;
    border-radius: 6px;
    background-color: #1c8de0;
  }
</style>
