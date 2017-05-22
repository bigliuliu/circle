<template>
  <div>
    <!--<my-header class="fix_top"></my-header>-->
    <el-row :gutter="6" justify="center" type="flex">
      <el-col :xs="6" :sm="5" :md="4" :lg="3" id="leftnav">
        <div class="left-content">
          <avatar></avatar>
          <left-nav class="left_nav"></left-nav>
        </div>
      </el-col>
      <el-col :xs="16" :sm="14" :md="12" :lg="10">
        <div class="flex_box middle_header"></div>
        <div class="right-content flex_box" id="toTop">
          <user-main></user-main>
        </div>
        <div class="scroll-top"><a class="button scrollable" @click="toTop"><i class="el-icon-caret-top"></i></a></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>

  import Avatar from '../common/Avatar.vue'
  import LeftNav from '../common/LeftNav.vue'
  import UserMain from '../common/UserMain.vue'
  export default {
    components: {
      LeftNav, Avatar, UserMain
    },
    methods: {
      toTop () {
        let element = document.getElementById('toTop')
        if (element) element.scrollTop = 0
//        console.log(element.scrollTop)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/css/mixin';

  .el-row {
    margin-bottom: 0;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .left-content, .right-content, .middle_header {
    border-radius: 5px;
  }

  .left-content {
    height: 100%;
  }

  .right-content {
    background: #1D55E0;
    min-height: 75vh;
    height: 75vh;
    overflow: scroll;
  }

  .middle_header {
    height: 19vh;
    background: #1D55E0;
    margin-bottom: 0.4vh;
  }

  .flex_box {
    display: flex;
    justify-content: center;
  }

  .left_nav {
    margin: 10px 5px 3px 3px;
    background-color: rgba(55, 95, 255, 0.95);
    color: #131313;
    border-radius: 10px;
  }

  .fix_top {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1999;
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

  .button:hover {
    border: 2px solid #fff;
    color: #722872;
    background-color: #fff;
  }

  .scroll-top {
    z-index: 1049;
    position: relative;
    visibility: visible;
    bottom: 80px;
    left: 50px;
  }

  .scroll-top a {
    background: #722872;
  }

  .scroll-top a:hover, .scroll-top a:focus {
    color: #722872;
    background-color: #bbb;
    border-color: #722872;
  }
</style>
