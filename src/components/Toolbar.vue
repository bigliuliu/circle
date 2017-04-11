<template>
    <div id="toolbar">
        <i class="glyphicon logo"><img src="@/assets/logo.png" width="30px" height="30px" alt="logo"></i>
        <i @click="newNote" class="glyphicon glyphicon-plus"></i>
        <i @click="toggleFavorite" class="glyphicon glyphicon-star" :class="{starred: activeNote.favorite}"></i>
        <i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
    </div>
</template>
<script type="text/javascript" charset="utf-8" async defer>
import {
    mapState,
    mapActions,
    mapGetters
} from 'vuex'
computed: mapGetters(['activeNote'])
methods: mapActions(['newNote', 'toggleFavorite', 'deleteNote'])
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
}
</style>
