<template>
  <el-row :gutter="10" justify="center" type="flex" class="floater">
    <el-col :xs="6" :sm="5" :md="4" :lg="3">
      <img src="/static/images/bgu.png" alt="" class="content">
    </el-col>
    <el-col :xs="12" :sm="10" :md="8" :lg="6">
      <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm content">
        <el-form-item label="用户" prop="pass">
          <el-input v-model="ruleForm2.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
          <el-button @click="registry">注册</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>
<script>
  import { mapActions } from 'vuex'
  export default {
    data () {
      let checkPassword = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('密码不能为空'))
        }
        setTimeout(() => {
          if (value.length < 8) {
            callback(new Error('密码长度不能小于8'))
          } else if (value.length > 30) {
            callback(new Error('密码长度不能大于30'))
          } else {
            callback()
          }
        }, 1000)
      }
      return {
        ruleForm2: {
          pass: '',
          checkPass: ''
        },
        rules2: {
          pass: [
            {require: true, message: '不能为空', trigger: 'blur'}
          ],
          checkPass: [
            {require: true, message: '不能为空', trigger: 'blur'},
            {validator: checkPassword, trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      ...mapActions(['check_login']),
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.check_login({userName: this.ruleForm2.pass, password: this.ruleForm2.checkPass})
          } else {
            console.log('!!')
            return false
          }
        })
      },
      registry () {
        this.$router.push('/registry')
      }
    }
  }
</script>
<style scoped>
  .floater {
    height: 100vh;
  }
  .content {
    position: relative;
    margin-top: 35vh;
    width: 100%;
  }
</style>

