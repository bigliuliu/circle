<template>
  <el-menu default-active="2" class="el-menu-vertical-demo">
    <el-submenu index="1">
      <template slot="title"><i class="el-icon-message"></i>我的圈子</template>
      <el-menu-item-group>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="1-3">选项3</el-menu-item>
        <el-menu-item index="1-4">选项4</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="2"><i class="el-icon-menu"></i>个人主页</el-menu-item>
    <el-menu-item index="3"><i class="el-icon-setting"></i>朋友圈</el-menu-item>
  </el-menu>
</template>
