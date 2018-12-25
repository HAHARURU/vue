export default {
  // 使用：import store from './store';store.dispatch('setData', {data: data});调用setData事件data为参数
  setData: ({
    commit,
    state
  }, data) => {
    if (data) {
      commit('setData', data) //触发index.js中setData方法
      /* 例如请求后端
      sysApi.userInfo().then(response => {
        if (response.ok) {
          if (response.data.success) {
            dispatch('init', response.data['init'])
          }
        }
      })
      */
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
