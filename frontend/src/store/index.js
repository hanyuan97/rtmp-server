import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drug: 0
  },
  mutations: {
    more(state) {
      state.drug += 1;
    },
    less(state) {
      state.drug -= 1;
    }
  },
  actions: {
  },
  modules: {
  }
})
