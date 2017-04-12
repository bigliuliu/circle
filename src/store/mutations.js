export default {
  INIT_STORE: (state, data) => {
    'use strict'
    state.notes = data.notes
    state.show = data.show
    state.activeNote = data.activeNote
  },
  NEW_NOTE: (state) => {
    'use strict'
    const newNote = {
      id: +new Date(),
      title: '',
      content: '',
      favorite: false
    }
    state.notes.push(newNote)
    state.activeNote = newNote
  },
  EDIT_NOTE: (state, note) => {
    'use strict'
    state.activeNote = note
    for (let i = 0; i < state.notes.length; i++) {
      if (state.notes[i].id === note.id) {
        state.notes[i] = note
        break
      }
    }
  },
  DELETE_NOTE: (state) => {
    state.notes.splice(state.activeNote, 1)
    state.activeNote = state.notes[0] || {}
  },
  TOGGLE_FAVORITE: (state) => {
    'use strict'
    state.activeNote.favorite = !state.activeNote.favorite
  },
  SET_SHOW_ALL: (state, show) => {
    'use strict'
    state.show = show
    if (show === 'favorite') {
      state.activeNote = state.notes.filter(note => note.favorite)[0] || {}
    } else {
      state.activeNote = state.notes[0] || {}
    }
  },
  SET_ACTIVE_NOTE: (state, note) => {
    state.activeNote = note
  }
}
