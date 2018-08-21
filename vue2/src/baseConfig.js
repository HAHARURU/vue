import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import ApiUrl from './appUrl.js'
import router from './router'
import store from './store'
import sysApi from '@/api/systemApi'
import {
  sync
} from 'vuex-router-sync'

Vue.use(VueRouter)
Vue.use(VueResource)
sync(store, router)

const url = ApiUrl.api(__MODE__) + (ApiUrl.port(__MODE__) === '' ? '' : ':' + ApiUrl.port(__MODE__)) + ApiUrl.contextPath(__MODE__)
Vue.http.options.emulateJSON = true
Vue.http.options.root = url
console.log('Vue.http.options.root: ' + Vue.http.options.root)

router.beforeEach((to, from, next) => {
  // 权限验证，登录跳转
  next()  //放行
})

router.afterEach((to, from) => {})

Vue.http.interceptors.push((request, next) => {
  // request.headers['Content-Type'] = 'application/json;charset=UTF-8'
  // next((response) => {
  //   if (response.status === 400 || response.status === 401) {
  //     Vue.$vux.loading.error()
  //     if (request.method !== 'POST' && request.url !== 'gateway/login' && request.url !== "gateway/logout") {
  //       //跳到登录页
  //       router.go('/login');
  //     } else if (request.url !== 'gateway/login' && request.url !== "gateway/logout") {
  //       Vue.$Modal.warning({
  //         title: '提示',
  //         content: response.body.message,
  //         okText: '确认',
  //         onOk: () => {
  //           //跳到登录页
  //           router.go('/login');
  //         }
  //       });
  //     }
  //   } else {
  //     Vue.$vux.loading.hide()
  //     if (!response.ok) {
  //       console.log('fail url: ' + response.url)
  //       Vue.$vux.toast.show({
  //         type: 'warn',
  //         text: '与服务器通信失败'
  //       })
  //     } else {
  //       if (!response.data.success) {
  //         Vue.$vux.toast.show({
  //           type: 'warn',
  //           text: response.data.message
  //         })
  //       }
  //     }
  //     return response
  //   }
  // })
})
