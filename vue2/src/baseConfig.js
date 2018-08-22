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
  next() //放行
})

router.afterEach((to, from) => {})

//http后台请求拦截器
Vue.http.interceptors.push((request, next) => {
  var route = router;
  request.headers['Access-Control-Allow-Origin'] = '*'
  request.headers['Content-Type'] = 'application/json;charset=UTF-8'
  next((response) => {
    if (response.status === 400 || response.status === 401) {
      if (request.method !== 'POST' && request.url !== 'gateway/login' && request.url !== "gateway/logout") {
        //跳到登录页
        route.push({
          path: 'home'
        });
      } else if (request.url !== 'gateway/login' && request.url !== "gateway/logout") {
        // 提示框，确定跳到登录页
        route.push({
          path: 'home'
        });
      }
    } else {
      if (!response.ok) {
        // 可以用弹出框提示
        console.log('与服务器通信失败: ' + response.url);
      } else {
        if (!response.data.code || response.data.code !== '200') {
          // 可以用弹出框提示
          console.log(response.data.message);
        }
      }
      return response
    }
  })
})
