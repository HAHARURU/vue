export default {
  setData: state => {
    return state.data //使用：import store from './store';tore.getters.data;获取state中data值
  },
  getImg: state => {
    return state.img
  },
  init: state => {
    return state.init
  }
}
