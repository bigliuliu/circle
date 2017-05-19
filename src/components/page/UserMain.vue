<template>
  <div>
  <ul id="example-1">
    <li v-for="item in 20">
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
    <div class="scroll-top"><a class="button scrollable" @click="toTop('top')"><i class="el-icon-caret-top"></i></a></div>
  </div>
</template>

<style>
  .el-carousel__item {
    color: #475669;
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
    width: 450px;
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
    transition:all .3s ease-in-out;
  }
  .button:hover {
    border: 2px solid #fff;
    color: #722872;
    background-color: #fff;
  }
  .scroll-top{
    z-index:1049;
    position:absolute;
    visibility:visible;
    bottom:2%;
    /*padding-right: 2000px;*/
    right:2%;
  }
  .scroll-top a{
    background:#722872;
  }
  .scroll-top a:hover, .scroll-top a:focus{
    color:#722872;
    background-color:#bbb;
    border-color:#722872;
  }
</style>
<script>
  export default {
    data () {
      return {
        currentDate: new Date()
      }
    },
    methods: {
      toTop (id) {
        let element = document.getElementById(id)
        if (element) element.scrollIntoView()
      }
    }
  }
</script>
