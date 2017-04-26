<template>
  <el-menu default-active="2" class="el-menu-vertical-demo" :router="true">
    <el-submenu index="1" v-if="clrcles">
      <template slot="title"><i class="el-icon-more"></i>我的圈子</template>
      <el-menu-item-group>
        <el-menu-item v-for="(clrcle, index) in clrcles" index="'1' + index" :key="clrcle.clrcle_id" :route="{path: '/home/' + clrcle.clrcle_name}">
          {{ clrcle.clrcle_name }}
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="2"><i class="el-icon-star-on"></i>关注</el-menu-item>
    <el-menu-item index="3"><i class="el-icon-menu"></i>朋友圈</el-menu-item>
  </el-menu>
</template>
<script>
  export default {
    data () {
      return {
        clrcles: [{
          clrcle_id: 5,
          clrcle_name: 'login'
        }, {
          clrcle_id: 2,
          clrcle_name: 'registry'
        }]
      }
    }
  }
</script>
