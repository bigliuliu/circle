<template>
  <el-form :model="ruleForm" ref="ruleForm" labelWidth="100%">

    <el-input
      type="textarea"
      placeholder="写点什么"
      v-model="ruleForm.text">
    </el-input>
    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
  </el-form>
</template>
<script>
  export default {
    data () {
      return {
        ruleForm: {
          text: ''
        }
      }
    }
  }
</script>
