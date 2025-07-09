<template>
    <div class="popular-foods">
      <h2>Popular Foods</h2>
      <div class="food-list">
        <RecipeCard v-for="food in popularFoods" :key="food.id" :recipe="food" />
      </div>
    </div>
  </template>
  
  <script>
   import RecipeCard from '../components/RecipeCard.vue';
  
  export default {
    name: 'PopularFoods',
    components: {
      RecipeCard,
    },
    data() {
      return {
        popularFoods: [
        { recipeId: 1, name: 'Jollof Rice', culturalSignificance: 'A popular West African dish often enjoyed at celebrations.', image: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/42788e49474248dba75fdfd47114024a/BFV43575_PartyRiceAroundAfrica-FB-V2.jpg'},
        { recipeId: 27, name: 'Apple Pie', culturalSignificance: 'A classic American dessert often enjoyed during holidays and celebrations.', image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/EXPS_TOHAS24_6086_DR_03_19_4b.jpg?fit=300,300&webp=1'},

        ],
      };
    },
  };
  </script>

<style scoped>
.popular-foods {
  padding: 20px;
  background-color: #f8f9fa;
 
}

h2{
  font-size: 1.3em;
  font-weight: lighter;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  margin-bottom: 20px;
}

.food-list {
  display: flex;
  gap: 20px;
  justify-content: space-evenly;
  flex-wrap: wrap;
  
}
</style>
