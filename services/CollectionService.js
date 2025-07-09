import axios from 'axios';



export default {

  list() {
    return axios.get('/collections')
  },

  get(collectionId) {
    return axios.get(`/collections/${collectionId}`)
   
},
  getCollection(userId) {
    return axios.get(`/collections/user/${userId}`)
   
  }, 
  create(collection) {
    return axios.post(`/collections`, collection);
  },
  
  addRecipeToCollection(recipeId,collectionId){
  return axios.put(`/collections/${collectionId}/${recipeId}`);
},
  update(collectionId, collection) {
    return axios.put(`/collections/${collectionId}`, collection);
  },
  delete(collectionId) {
    return axios.delete(`/collections/${collectionId}`);
  }

}