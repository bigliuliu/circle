<template>
  <div name="top" id="top">
    <my-header class="fix_top"></my-header>
    <el-row :gutter="10" justify="center" type="flex">
      <el-col :xs="6" :sm="5" :md="4" :lg="3" id="leftnav">
        <div class="left-content">
          <avatar></avatar>
          <left-nav class="left_nav"></left-nav>
        </div>
      </el-col>
      <el-col :xs="16" :sm="14" :md="12" :lg="10">
        <div class="flex_box middle_header"></div>
        <div class="right-content flex_box">
          <router-view></router-view>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import MyHeader from '../common/MyHeader.vue'
  import Avatar from '../common/Avatar.vue'
  import LeftNav from '../common/LeftNav.vue'
  export default {
    components: {
      MyHeader, LeftNav, Avatar
    },
    mounted () {
      this.$nextTick(function () {
        window.addEventListener('scroll', this.toTop('leftnav'))
      })
//      let element = document.getElementById('leftnav')
    },
    methods: {
      toTop (id) {
        let element = document.getElementById(id)
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
    top: 55px;
    &:last-child {
      margin-bottom: 0;
    }
  }


  .left-content, .right-content, .middle_header {
    border-radius: 5px;
  }

  .left-content {
    height: 100%;
    opacity: 1;
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
    margin: 10px 15px 3px 3px;
  }

  .fix_top {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1999;
  }

</style>
