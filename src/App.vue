<template>
    <div id="app" class="app">
        <toolbar></toolbar>
        <notes-list></notes-list>
        <editor></editor>
        <!-- <router-view></router-view> -->
    </div>
</template>

<script type="text/javascript" charset="utf-8" async defer>
    import Toolbar from '@/components/Toolbar'
    import NotesList from '@/components/NotesList'
    import Editor from './components/Editor'
    import store from '@/store'
    export default {
        created() {
            this.$store.initStore()
        },
        components: {
            Toolbar,
            NotesList,
            Editor
        },
        store
    }
</script>

<style>
html,
#app {
    height: 100%;
}

body {
    margin: 0;
    padding: 0;
    border: 0;
    height: 100%;
    max-height: 100%;
    position: relative;
}
</style>

