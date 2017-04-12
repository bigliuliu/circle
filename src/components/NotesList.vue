<template>
  <div id="notes-list">
    <div id="list-header">
      <h2>Notes | heavenru.com</h2>
      <div class="btn btn-group btn-group-justified" role="group">
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default" @click="toggleShow('all')" :class="{active: show === 'all'}">
            All Notes
          </button>
        </div>
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default" @click="toggleShow('favorite')"
                  :class="{active: show === 'favorite'}">Favorites
          </button>
        </div>
      </div>
    </div>
    <div id="container">
      <div id="list-group">
        <a v-for="note in filteredNotes" class="list-group-item" href="#" :class="{active: activeNote === note}"
           @click="updateActiveNote(note)">
          <h4 class="list-group-item-heading">{{ note.title.trim().substring(0, 30) }}</h4>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapState, mapGetters, mapActions } from 'vuex'
  export default {
    computed: {
      ...mapState(['activeNote', 'show']),
      ...mapGetters(['filteredNotes'])
    },
    methods: {
      ...mapActions(['updateShow', 'updateActiveNote']),
      toggleShow (show) {
        this.updateShow(show)
      }
    }
  }
</script>
<style lang="scss">
  #notes-list {
    float: left;
    width: 300px;
    height: 100%;
    background-color: #F5F5F5;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    #list-header {
      padding: 5px 25px 25px 25px;
      h2 {
        font-weight: 300;
        text-transform: uppercase;
        text-align: center;
        font-size: 22px;
        padding-bottom: 8px;
      }
    }
    .container {
      height: calc(100% - 137px);
      max-height: calc(100% - 137px);
      overflow: auto;
      width: 100%;
      padding: 0;
    }
  }

  #notes-list .container .list-group-item {
    border: 0;
    border-radius: 0;
  }

  .list-group-item-heading {
    font-weight: 300;
    font-size: 15px;
  }
</style>
