<template>
  <el-row justify="center" type="flex">
    <el-col :xs="3" :sm="3" :md="3" :lg="2">
      <div class="grid-content bg-purple">
        <router-link to="/" class="head_logo">首页</router-link>
        <!--<div class="head_logo" @click="reload">首页</div>-->
      </div>
    </el-col>
    <el-col :xs="18" :sm="17" :md="16" :lg="11">
      <div class="grid-content bg-purple">
        <div v-if=user.user_id></div>
        <div v-else class="login_header">
          <login-header></login-header>
        </div>
      </div>
    </el-col>
    <el-col :xs="3" :sm="3" :md="3" :lg="2">
      <div class="grid-content bg-purple logout">
        <log-out></log-out>
      </div>
    </el-col>
  </el-row>
</template>
<script>
  import { mapState } from 'vuex'
  import LoginHeader from '../common/LoginHeader.vue'
  import LogOut from '../common/LogOut.vue'
  export default {
    date () {
      return {}
    },
    computed: {
      ...mapState(['user'])
    },
    components: {
      LoginHeader, LogOut
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../assets/css/mixin';

  .el-row {
    margin-bottom: 5px;
    &:last-child {
      margin-bottom: 0;
    }
    background: #7f5eff;
  }

  .el-col {
    border-radius: 2px;
  }

  .head_logo {
    font-size: 28px;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    height: 48px;
    width: 60%;
    display: inline-block;
    background-color: #7f8eff;
    text-align: center;
  }

  .head_logo:hover,.head_logo:focus{
    color: white;
  }

  .grid-content {
    border-radius: 2px;
    height: 50px;
    text-align: center;
  }

  .login_header, .logout {
    height: 36px;
    display: inline-block;
    margin: 5px auto;
    float: right;
    font-size: 15px;
  }
  @media (max-width: 800px) {
    .login_header {
      display: none;
    }
  }

</style>

