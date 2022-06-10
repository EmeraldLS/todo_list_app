import { createStore } from 'vuex'

export default createStore({
  state: {
    todo: null
  },

  getters: {

  },

  mutations: {
    SET_TODO(state, todo) {
      state.todo = todo
    }
  },

  actions: {
    setTodo({ commit }, todo) {
      commit('SET_TODO', todo)
    }
  },

  modules: {

  }

})
