<template>
    <div class="recipes">
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
    getRecipes(){
      
RecipeService.list()
.then((response)=> {
  this.isLoading = false;
  this.recipes  = response.data;
})
    },
  
  },
  created() {
    this.getRecipes();
  }
};

</script>

<style>
.recipes {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  /* gap: 30px; */
  justify-content: space-evenly;
  align-items: center;
}
</style>
