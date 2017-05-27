<template>
  <div>
    <div class="flex_box middle_header"></div>
    <div class="scroll-left scroll"><a class="hidden_left" @click="hiddenLeft"><icon :name=step></icon></a></div>
    <div class="right-content flex_box" id="toTop">
      <ul id="example-1">
        <li v-for="item in 20">
          <div>
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <a href="home" class="username">我的名字</a>
          </div>
          <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in 5" :key="item">
              <el-card :body-style="{ padding: '0px' }" class="box-card">
                <img src="/static/images/bgu.png" class="image">
                <div style="padding: 14px;">
                  <span>好吃的汉堡</span>
                  <div class="bottom clearfix">
                    <time class="time">{{ currentDate }}</time>
                    <el-button type="text" class="operate">操作按钮</el-button>
                  </div>
                </div>
              </el-card>
            </el-carousel-item>
          </el-carousel>
        </li>
      </ul>
    </div>
    <div class="scroll-top scroll"><a class="button" @click="toTop"><i class="el-icon-caret-top"></i></a></div>
  </div>
</template>

<style lang="scss" scoped>
  .right-content, .middle_header {
    border-radius: 5px;
  }

  .right-content {
    background: linear-gradient(120deg, rgba(204, 232, 207, 1), rgba(204,232,207,0.6));
    min-height: 75vh;
    height: 75vh;
    overflow: scroll;
  }

  .middle_header {
    height: 19vh;
    background: linear-gradient(160deg, rgba(204,232,207,0.9), rgba(30,144,255,0.1));
    margin-bottom: 0.4vh;
  }

  .flex_box {
    display: flex;
    justify-content: center;
  }

  .button {
    color: #ffffff;
    border: solid 2px #fff;
    border-radius: 50%;
    display: inline-block;
    width: 50px;
    height: 50px;
    text-align: center;
    font-size: 20px;
    line-height: 48px;
    transition: all .3s ease-in-out;
    padding: 0;
    float: right;
  }

  .hidden_left {
    color: #ffffff;
    border: solid 2px #fff;
    border-radius: 50%;
    display: inline-block;
    width: 22px;
    height: 22px;
    text-align: center;
    font-size: 20px;
    line-height: 20px;
    transition: all .3s ease-in-out;
    padding: 0;
    float: left;
  }

  .button:hover {
    border: 2px solid #fff;
    color: #722872;
    background-color: #fff;
  }

  .scroll-left {
    z-index: 1048;
    position: relative;
    visibility: visible;
    top: 68vh;
    margin-left: -30px;
  }

  .scroll-top {
    z-index: 1049;
    position: relative;
    visibility: visible;
    bottom: 80px;
    left: 50px;
  }

  .scroll a {
    background: #722872;
  }

  .scroll a:hover, .scroll a:focus {
    color: #722872;
    background-color: #bbb;
    border-color: #722872;
  }

  .username {
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

  .operate {
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
  import 'vue-awesome/icons/step-forward'
  import 'vue-awesome/icons/step-backward'
  import { mapState } from 'vuex'
  export default {
    data () {
      return {
        currentDate: new Date(),
        imageUrl: '',
        step: 'step-backward',
        isActive: false
      }
    },
    mounted () {
      this.imageUrl = (this.user.avatar !== '' ? this.user.avatar : '/static/images/bgu.png')
    },
    computed: {
      ...mapState(['user'])
    },
    methods: {
      toTop () {
        let element = document.getElementById('toTop')
        if (element) element.scrollTop = 0
      },
      hiddenLeft () {
        this.isActive = !this.isActive
        let leftnav = document.getElementById('leftnav')
        if (this.isActive) {
          leftnav.style.display = 'block'
          this.step = 'step-backward'
        } else {
          leftnav.style.display = 'none'
          this.step = 'step-forward'
        }
      }
    }
  }
</script>
