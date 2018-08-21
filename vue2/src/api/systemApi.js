import Vue from 'vue'

export default {
  getCity(params){
    return Vue.http.post('country/getCity',params)
  }
}
