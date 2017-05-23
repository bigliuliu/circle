<template>
  <el-menu default-active="2" class="el-menu-vertical-demo" :router="true">
    <el-submenu index="1">
      <template slot="title"><i class="el-icon-more"></i>我的</template>
      <el-menu-item-group  v-if="circles">
        <el-menu-item v-for="(circle, index) in circles" index="index" :key="circle.circle_id" :route="{path: '/' +circle.circle_name}">
          {{ circle.circle_name }}
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="2"><i class="el-icon-star-on"></i>关注</el-menu-item>
    <el-menu-item index="3"><i class="el-icon-menu"></i>好友</el-menu-item>
  </el-menu>
</template>
<script>
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
      }]
    }
  }
</script>
