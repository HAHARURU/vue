export default {
  setData: ({
    commit,
    state
  }, data) => {
    if (data) {
      commit('setData', data)
    }
  },
  init: ({
    commit,
    state
  }, init) => {
    commit('init', init)
  },
  getImg: ({
    commit,
    state
  }, img) => {
    commit('getImg', img)
  }
}
