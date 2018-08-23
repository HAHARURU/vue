import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import axios from 'axios'
import ApiUrl from './appUrl.js'
import router from './router'
import store from './store'
import qs from 'qs'
import sysApi from '@/api/systemApi'
import {
  sync
} from 'vuex-router-sync'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;
sync(store, router)

const url = ApiUrl.api(__MODE__) + (ApiUrl.port(__MODE__) === '' ? '' : ':' + ApiUrl.port(__MODE__)) + ApiUrl.contextPath(__MODE__)
// vue-resource
Vue.http.options.emulateJSON = true
Vue.http.options.root = url
console.log('Vue.http.options.root: ' + Vue.http.options.root)

// axios
axios.defaults.baseURL = url
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.emulateJSON = true

router.beforeEach((to, from, next) => {
  // 权限验证，登录跳转
  next() //放行
})

router.afterEach((to, from) => {})

// axios添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前操作
  return config;
}, function (error) {
  // 对请求错误操作
  return Promise.reject(error);
});

// axios添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据操作
  return response;
}, function (error) {
  // 对响应错误操作
  return Promise.reject(error);
});

//vue-resource http后台请求拦截器
Vue.http.interceptors.push((request, next) => {
  debugger
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
