<template>
  <el-row justify="center" type="flex">
    <el-col :xs="3" :sm="3" :md="3" :lg="2">
      <div class="grid-content bg-purple">
        <div class="head_logo" @click="reload">circle</div>
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

  .el-row {
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
    background: #7f5eff;
  }

  .el-col {
    border-radius: 2px;
  }

  .head_logo {
    font-size: 24px;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    height: 100%;
    line-height: 100%;
    display: inline-block;
    /*margin: 0px auto;*/
  }

  .grid-content {
    border-radius: 2px;
    height: 40px;
    text-align: center;
  }

  .login_header, .logout {
    height: 36px;
    display: inline-block;
    margin: 2px auto;
    float: right;
    font-size: 15px;
  }

</style>

