<template>
     <div class="recipes">
      <h1></h1>
        <div v-for="recipe in recipes" :key="recipe.recipeId">
          <!-- <router-link :to="`/recipes/${recipe.recipeId}`">{{ recipe.name }}</router-link> -->
        <recipe-card v-bind:recipe="recipe"/>
        </div>
    </div> 
    
  </template>

  
<script>
import RecipeService from '../services/RecipeService';
import RecipeCard from '../components/RecipeCard.vue';
export default {
  components: {RecipeCard},
  

  data() {
    return {
      recipes: [],
      isLoading: true
    }
  },
  methods: {
    getRecipes(categoryId){
      
RecipeService.getRecipes(categoryId)
.then((response)=> {
  this.isLoading = false;
  this.recipes  = response.data;
})
    },
  
  },
  created() {
    this.getRecipes(this.$route.params.categoryId);
  }
};

</script>

