<template>
  <div id="note-editor">
    <div id="form-group">
      <input type="text" name="title" class="title form-control" placeholder="title" @input="updateNote"
             v-model=activeNote.title>
      <textarea v-model=activeNote.content name="content" placeholder="请输入正文" class="form-control" rows="3"
                @input="updateNote"></textarea></div>
  </div>
</template>
<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    computed: {
      ...mapState(['activeNote'])
    },
    methods: {
      ...mapActions(['editNote']),
      updateNote () {
        this.editNote(this.activeNote)
      }
    }
  }
</script>
<style lang="scss">
  #note-editor {
    height: 100%;
    margin-left: 380px;
    .form-group{
      height: 50%;
    }
    .title{
      border:0;
    }
    textarea{
      height: 100%;
      border: 0;
      border-radius: 0;
      padding-top: 15px;
    }
  }
</style>
