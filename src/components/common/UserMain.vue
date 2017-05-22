<template>
  <ul id="example-1">
    <li v-for="item in 20">
      <div>
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <a href="home">我的名字</a>
      </div>
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in 5" :key="item">
          <el-card :body-style="{ padding: '0px' }" class="box-card">
            <img src="/static/images/bgu.png" class="image">
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-carousel-item>
      </el-carousel>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
  a {
    font-size: 18px;
    position: relative;
    right: 72px;
    bottom: 5px;
  }
  #example-1 {
    padding-top: 40px;
    width: 70%;
    /*justify-content: center;*/
  }
  .el-carousel__item {
    color: #6484c3;
    font-size: 14px;
    opacity: 0.75;
    line-height: 100px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .el-carousel {
    /*width: 450px;*/
  }

  .box-card {
    height: 200px;
  }

  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
    height: 150px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .avatar {
    width: 30px;
    height: 30px;
    position: relative;
    right: 70px;
    border-radius: 50%;
  }
</style>
<script>
  import { mapState } from 'vuex'
  export default {
    data () {
      return {
        currentDate: new Date(),
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
      toTop (id) {
        let element = document.getElementById(id)
        if (element) element.scrollIntoView()
      }
    }
  }
</script>
