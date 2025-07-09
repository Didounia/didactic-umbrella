import axios from 'axios';



export default {

  list() {
    return axios.get('/categories')
  },



  get(categoryId) {
    return axios.get(`/categories/${categoryId}`)
   
},

create(category) {
  return axios.post(`/categories/`, category);
},

update(categoryId, category) {
  return axios.put(`/categories/${categoryId}`, category);
},

delete(categoryId) {
  return axios.delete(`/categories/${categoryId}`);
}

}
