import Vue from 'vue'

export default {
  test(params) {
    return Vue.http.post('country/CountryService/test', params)
  },
  testAxios(params) {
    return Vue.prototype.$axios.post('country/CountryService/test', params)
  },
}
