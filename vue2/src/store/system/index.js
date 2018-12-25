// state
const state = {
  data: {},
  img: '',
  init: false
}

// mutations
const mutations = {
  'init' (state, init) {
    state.init = init
  },
  'setData' (state, data) {
    // 赋值操作
    state.data = data
  },
  'getImg' (state, img) {
    state.img = img
  }
}

import getters from './getters'
import actions from './actions'

export default {
  state,
  mutations,
  getters,
  actions
}
