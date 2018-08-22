import Vue from 'vue'

export default {
  getCity(params){
    return Vue.http.post('country/CountryService/test',params)
  }
}
