<template>
  <el-upload
    class="avatar-uploader"
    action="https://jsonplaceholder.typicode.com/posts/"
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload">
    <img v-if="imageUrl" :src="imageUrl" class="avatar">
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
  </el-upload>
</template>

<style lang="scss"  >
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width: 80%;
    height: 10vw;
    display:flex;
    justify-content:center;
    align-items: center;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  }
  .avatar-uploader-icon {
    color: #8c939d;
    width: 100%;
    height: 100%;
  }
  .avatar {
    width: 100%;
    height: 0px;
    display: block;
    padding-bottom: 100%;
  }
</style>

<script>
  export default {
    data () {
      return {
        imageUrl: ''
      }
    },
    methods: {
      handleAvatarSuccess (res, file) {
        this.imageUrl = URL.createObjectURL(file.raw)
      },
      beforeAvatarUpload (file) {
        const isLt2M = file.size / 1024 / 1024 < 2
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!')
        }
        return isLt2M
      }
    }
  }
</script>
