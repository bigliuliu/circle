<template>
  <el-row :gutter="10" justify="center" type="flex">
    <el-col :xs="6" :sm="5" :md="4" :lg="3">
    </el-col>
    <el-col :xs="16" :sm="14" :md="12" :lg="10">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用戶名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密碼" prop="password">
          <el-input type="password" v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item label="密碼確認" prop="repassword">
          <el-input type="password" v-model="ruleForm.repassword"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">注冊</el-button>
          <el-button @click="login">登陸</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>
<script>
  import { mapActions, mapState } from 'vuex'
  export default {
    data () {
      let validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass')
          }
          callback()
        }
      }
      let validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }
      return {
        ruleForm: {
          name: '',
          password: '',
          repassword: ''
        },
        rules: {
          name: [
            {required: true, message: '用戶名', trigger: 'blur'},
            {min: 1, max: 10, message: '', trigger: 'blur'}
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      }
    },
    computed:{
      ...mapState(['user'])
    },
    methods: {
      ...mapActions(['check_user']),
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.check_user({username: this.ruleForm.name, password: this.ruleForm.password})
            if (this.user.user_id) this.$router.push('/user_home')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      login () {
        this.$router.push('/login')
      }
    }
  }
</script>
