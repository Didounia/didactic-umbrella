import axios from 'axios';



export default {

list() {
    return axios.get('/directions')
  },



  get(directionId) {
    return axios.get(`/directions/${directionId}`)



},
getDirections(recipeId) {
  return axios.get(`/directions/recipe/${recipeId}`)
},

create(direction) {
  return axios.post(`/directions/`, direction);
},


update(directionId, direction) {
  return axios.get(`/directions/${directionId}`, direction)

},

delete(directionId) {
  return axios.delete(`/directions/${directionId}`);
}

}