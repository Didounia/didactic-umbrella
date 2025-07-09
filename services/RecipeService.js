import axios from 'axios';



export default {

  list() {
    return axios.get('/recipes')
  },

listBySearch(nameLike){
return axios.get(`/recipes?name_like=${nameLike}`)

},

  get(recipeId) {
    return axios.get(`/recipes/${recipeId}`)
   
},

getRecipes(categoryId){
  return axios.get(`/recipes/category/${categoryId}`)
},

getRecipesByCollection(collectionId){
  return axios.get(`/recipes/collection/${collectionId}`)
}, 
create(recipe) {
  return axios.post(`/recipes/`, recipe);
},

update(recipeId, recipe) {
  return axios.put(`/recipes/${recipeId}`, recipe);
},

delete(recipeId) {
  return axios.delete(`/recipes/${recipeId}`);
}

}