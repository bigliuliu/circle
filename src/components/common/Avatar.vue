<template>
  <el-upload
    class="avatar-uploader"
    action="https://jsonplaceholder.typicode.com/posts/"
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload">
    <img v-if="imageUrl" :src="imageUrl" class="avatar">
    <!--<i v-else class="el-icon-plus avatar-uploader-icon"></i>-->
  </el-upload>
</template>

<style lang="scss">
  .avatar-uploader .el-upload {
    /*border: 1px dashed #d9d9d9;*/
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width: 85%;
    height: 85%;
    padding: 10px 10px;

    /*display: flex;*/
    /*justify-content: center;*/
    /*align-items: center;*/
  }

  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  }

  /*.avatar-uploader-icon {*/
    /*color: #8c939d;*/
    /*width: 100%;*/
    /*height: 100%;*/
  /*}*/

  .avatar {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    /*display: block;*/
    /*padding-bottom: 100%;*/
  }
</style>

<script>
  import { mapState } from 'vuex'
  export default {
    data () {
      return {
        imageUrl: ''
      }
    },
    mounted () {
      this.imageUrl = (this.user.avatar !== '' ? this.user.avatar : '/static/images/bgu.png')
    },
    computed: {
      ...mapState(['user'])
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
