<template>
  <div id="toolbar">
    <i class="glyphicon logo"><img src="../assets/logo.png" width="30" height="30" alt="logo"></i>
    <i @click="newNote" class="glyphicon glyphicon-plus"></i>
    <i @click="toggleFavorite" class="glyphicon glyphicon-star" :class="{starred: activeNote.favorite}"></i>
    <i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
  </div>
</template>
<script type="text/javascript" charset="utf-8" async defer>
  /* eslint-disable indent */

  import {
    mapState,
    mapActions
  } from 'vuex'
  export default{
    computed: {
      ...mapState(['activeNote'])
    },
    methods: {
      ...mapActions(['newNote', 'toggleFavorite', 'deleteNote'])
    }
  }

</script>
<style lang='scss' scoped>
  #toolbar {
    float: left;
    width: 80px;
    height: 100%;
    background-color: #30414D;
    color: #767676;
    padding: 35px 25px 25px 25px;
    .starred {
      color: #F7AE4F;
    }
    i{
      font-size: 30px;
      margin-bottom: 35px;
      cursor: pointer;
      opacity: 0.8;
      transition: opacity 0.5s ease;

      &:hover{
        opacity: 1;
      }
    }
  }
</style>
