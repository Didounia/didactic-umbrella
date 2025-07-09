<template>
    <div class="card">
      <h1 class="recipe-name">{{ recipe.name }}</h1>
      <!-- <h2 class="category-categoryName"> {{ category.categoryName }}</h2> -->
      <p class="recipe-culturalSignificance">{{recipe.culturalSignificance}}</p>
      <img class="recipe-image" v-bind:src="recipe.image">
      <div class="button-container">
      <button class="view-button" @click="viewDetails(recipe.recipeId)">View Details</button>
      <button class="add-to-cart-button" @click="addToCollection(recipe.recipeId, 1)">
      <svg xmlns="http://www.w3.org/2000/svg" class="cart-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2m0 0L5.6 7m-2.2-2h13.4m0 0l1.2 5H6.8m8.6 5H7.6m3 5h3m-3 0a1 1 0 01-1-1h4a1 1 0 01-1 1zm-6.8-5a1 1 0 001-1H4a1 1 0 00-.8 1zm8-5l.2 1H8.2l-.2-1" />
      </svg>
      Add to Cart
    </button>
  </div>
   </div>
  </template>
  
  <script>
  import CollectionService from '../services/CollectionService';
  export default {
    
    name: 'RecipeCard',
    
    props: {
      recipe: Object
      
    },
    methods: {
      viewDetails(recipeId) {
        this.$router.push({name:'recipeDetails', params:{recipeId:recipeId}})
      },
      addToCollection(recipeId, collectionId){
    CollectionService.addRecipeToCollection(recipeId, collectionId)
      .then((response)=> {
        this.isLoading = false;
        this.collection  = response.data;
      })
      this.$router.push({name:'collectionCart', params:{recipeId:collectionId}})
          },
    },

   

        
//    created() {
// this.addRecipeToCollection(this.$route.params.recipeId, this.$route.params.collectionId);
//         }

 
   
        };
      
      
  </script>
  
  
/* .card {
  border: 2px solid black;
  border-radius: 10px;
  width: 250px;
  height: 550px;
  margin: 20px;
  position: relative;
} */


<style scoped>
.card {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 15px;
  padding: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  width: 600px;
  height: 400px;
  margin: 10px;

}

@keyframes scrolling-text {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
}


.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

 .recipe-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
} 



.recipe-name {
  font-size: 1.2em;
  font-weight: bold;
  color: #343a40;
  margin-bottom: 5px;
}

.recipe-culturalSignificance {
  font-size: 1em;
  font-weight: lighter;
  color: #5a5f63;
  height: 38px;
  /* overflow: hidden; */
  /* white-space: nowrap;
  animation: scrolling-text 25s linear infinite; */
  /* margin-bottom: 15px; */
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
}

.view-button{
  display: flex;
  align-items: center;
  /* flex-direction: row; */
  background-color: #f8c146;
  color: white;
  justify-content: center;
  gap: 5px;
  padding: 8px 12px;
  background-color: #f8c146;

  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 1em;
  /* font-weight: bold; */
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.view-button:hover {
  background-color: #d89d2d;
}

.add-to-cart-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 8px 12px;
  background-color: #f8c146;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
}

.add-to-cart-button:hover {
  background-color: #d9a437;
  transform: scale(1.05);
}

.cart-icon {
  width: 20px;
  height: 20px;
}

</style>