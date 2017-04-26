<template>
  <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
    <el-form-item label="用户" prop="pass">
      <el-input v-model="ruleForm2.pass" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="checkPass">
      <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm">登录</el-button>
      <el-button @click="registry">注册</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
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
      submitForm () {
      },
      registry () {
        this.$router.push('/registry')
      }
    }
  }
</script>

