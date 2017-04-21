<template>
    <el-row justify="center" type="flex">
      <el-col :xs="22" :sm="19" :md="16" :lg="13"><div class="grid-content bg-purple">
        <slot name="logo"></slot>
      </div></el-col>
    </el-row>
</template>
<script>

</script>
<style lang="scss" scoped>
  @import '../../assets/css/mixin';
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 2px;
  }
  .bg-purple {
    background: #4b5356;
  }
  .grid-content {
    border-radius: 2px;
    height: 36px;
  }
</style>
