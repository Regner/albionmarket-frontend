import axios from 'axios'

export default {
  getStatsV1 () {
    return axios.get('/v1/stats/')
  },
  getOrdersV1 (itemId) {
    return axios.get('/v1/orders/' + itemId +'/')
  },
  getOrdersStatsV1 (itemId) {
    return axios.get('/v1/orders/' + itemId +'/stats/')
  },
  getItemsV1 () {
    return axios.get('/v1/items/')
  },
  getCategoriesV1 () {
    return axios.get('/v1/categories/')
  },
  getResourceStatsV1 () {
    return axios.get('/v1/orders/resources/')
  }
}