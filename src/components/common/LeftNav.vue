<template>
  <el-menu default-active="2" class="el-menu-vertical-demo" :router="true" theme="dark">
    <el-submenu index="1">
      <template slot="title"><icon name="navicon"></icon>我的</template>
      <el-menu-item-group  v-if="circles">
        <el-menu-item v-for="(circle, index) in circles" index="index" :key="circle.circle_id" :route="{path: '/' +circle.circle_name}">
          {{ circle.circle_name }}
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="2"><icon name="star"></icon>关注</el-menu-item>
    <el-menu-item index="3"><icon name="user"></icon>好友</el-menu-item>
  </el-menu>
</template>
<script>
  import 'vue-awesome/icons/user'
  import 'vue-awesome/icons/star'
  import 'vue-awesome/icons/navicon'
  export default {
    data () {
      return {
        circles: []
      }
    },
    mounted () {
      this.circles = [{
        circle_id: 3, circle_name: 'friend'
      }, {
        circle_id: 2, circle_name: 'registry'
      }, {
        circle_id: 1, circle_name: 'guides'
      }, {
        circle_id: 3, circle_name: 'friend'
      }, {
        circle_id: 2, circle_name: 'registry'
      }, {
        circle_id: 1, circle_name: 'guides'
      }]
    }
  }
</script>
<style lang="scss" scoped>
  .fa-icon {
    width: 25px;
    position: relative;
    top: 3px;
  }
</style>
