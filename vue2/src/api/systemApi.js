import Vue from 'vue'

export default {
  test(params) {
    return Vue.http.post('country/CountryService/test', params)
  },
  testAxios(axios, params) {
    return axios.post('country/CountryService/test', params)
  },
}
