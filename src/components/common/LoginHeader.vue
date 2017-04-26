<template>
  <el-form :inline="true" :model="user" class="demo-form-inline">
    <el-form-item label="账号" class="ellipsis">
      <el-input v-model="user.username" placeholder="用户名/邮箱/手机号码" size="small"></el-input>
    </el-form-item>
    <el-form-item label="密码" class="ellipsis">
      <el-input type="password" v-model="user.password" placeholder="密码" size="small"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit" size="small">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    data () {
      return {
        user: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      onSubmit () {
        console.log('submit!')
      }
    }
  }
</script>
