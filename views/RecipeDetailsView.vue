<template>
    <div class="recipe-details">
      
      <h1>{{ recipe.name }}</h1>
      <h2>{{ category.categoryName }}</h2>
      <p>{{ recipe.description }}</p>
      <h3>Ingredients:</h3>
      <p>{{recipe.ingredients}}</p>
      <h3>Instructions:</h3>
      <ol>
        <li v-for="step in direction" :key="step.directionId">{{ step.steps}}</li>
      </ol>
      <h3>Nutritional details</h3>
      <p>{{ recipe.nutritionalDetails}}</p>
      <h3>Time(Mins)</h3>
      <p>{{ recipe.time }}</p>
      <h3>Cultural Significance</h3>
      <p>{{ recipe.culturalSignificance}}</p>

    </div>
  </template>

    
<script>
import RecipeService from '../services/RecipeService';
import CategoryService from '../services/CategoryService';
import DirectionsService from'../services/DirectionsService';

export default {
  
  data() {
    return {
      recipe: {},
      category: {},
      direction:[],
      isLoading: true
    }
  },
  methods: {
    getRecipe(id) {
      
RecipeService.get(id)
.then((response)=> {
  this.isLoading = false;
  
  this.recipe  = response.data;
  this.getCategory(this.recipe.categoryId)
  this.getDirection(this.recipe.recipeId)
})
    },

  

  getCategory(categoryId) {
      
      CategoryService.get(categoryId)
      .then((response)=> {
        this.isLoading = false;
        this.category  = response.data;
      })
          },


   getDirection(recipeId) {
      
      DirectionsService.getDirections(recipeId)
      .then((response)=> {
        this.isLoading = false;
        this.direction  = response.data;
        console.log(this.direction)
      })
          },
        },
        

    created() {

    this.getRecipe(this.$route.params.recipeId);

  
  }

  
}


</script>

<style>
ol {
  list-style-type: decimal;
  padding-left: 80px;
  color: #555;
}

li {
  background: #f8f9fa;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 5px;
 
}
</style>