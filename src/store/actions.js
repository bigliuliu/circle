const initNote = {
  id: +new Date(),
  title: '我的笔记',
  content: '第一篇笔记内容',
  favorite: false
}

const initData = {
  show: 'all',
  notes: [initNote],
  activeNote: initNote
}

export default {
  initStore ({commit}) {
    commit('INIT_STORE', initData)
  },
  updateActiveNote ({commit}, note) {
    commit('SET_ACTIVE_NOTE', note)
  },
  newNote ({commit}, note) {
    commit('NEW_NOTE', note)
  },
  deleteNote ({commit}) {
    commit('DELETE_NOTE')
  },
  toggleFavorite ({commit}) {
    commit('TOGGLE_FAVORITE')
  },
  editNote ({commit}, note) {
    commit('EDIT_NOTE', note)
  },
  updateShow ({commit}, show) {
    commit('SET_SHOW_ALL', show)
  }
}
