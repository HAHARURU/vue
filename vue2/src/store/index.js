import Vue from 'vue'
import Vuex from 'vuex'
import system from './system'

Vue.use(Vuex)

let debug = false
if (process && process.env && process.env.NODE_ENV && process.env.NODE_ENV !== 'production') {
  debug = true
}


export default new Vuex.Store({
  modules: {
    system
  },
  strict: debug
})
