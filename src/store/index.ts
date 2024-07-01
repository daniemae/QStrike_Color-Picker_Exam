import { createStore } from 'vuex'

export default createStore({
  state: {
    selectedColor: {}
  },
  getters: {
  },
  mutations: {
    getObj: ((state, payload) => {
      state.selectedColor = payload
    })
  },
  actions: {
    getColorObj:((context,payload) => {
      context.commit('getObj',payload)
    })
  },
  modules: {
  }
})
