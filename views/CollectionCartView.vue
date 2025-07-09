<template>
  <div class="collections-container">
    <div class="collections">
      <h1>Collections</h1>
      <div class="button-container">
        <button class="create-button" @click="makeCollection()"> Create</button>
      </div>
      <div class="collections-list">
        <div class="collection-item" v-for="collection in collections" :key="collection.collectionId">
        <button class="collection-button">{{ collection.collectionName }}</button>
        
        <button class="delete-button" @dblclick="deleteCollection(collection.collectionId)">Delete </button>
        </div>
    </div>
  </div>
  </div>
</template>

<script>
import CollectionService from '../services/CollectionService';
import RecipeService from '../services/RecipeService';

 export default {
    name: 'CollectionCartView',

data(){
    return{
        collections:[],
        isLoading: true
    }
}, 
methods: {
    getCollections(){
   CollectionService.list()     
   .then((response)=> {
  this.isLoading = false;
  this.collections  = response.data;
})
    },

 get(collectionId){
 CollectionService.get(collectionId)
.then((response)=> {
  this.isLoading = false;
  this.collections  = response.data;
})
   },


   getCollection(userId){
 CollectionService.getCollection(userId)
 .then((response)=> {
  this.isLoading = false;
  this.collections  = response.data;
})
   }, 
 
getListOfRecipesByCollectionId(collectionId){
RecipeService.getRecipesByCollection(collectionId)
.then((response)=> {
  this.isLoading = false;
  this.recipe  = response.data;
})
   },


   makeCollection(){
  
   this. $router.push({name: 'CreateCollection'});

    },
        
       edit(){
        CollectionService
       .update(this.collection.collectionId, this.collection)
       .then(response => {
        if(response.status === 200){
          this.$router.push({name: 'recipeDetailsView', params:{collectionId: this.collection.collectionId}});
        }
       })
       .catch(error => {
      console.error('Error updating collection:', error);
      this.handleErrorResponse(error, 'updating');
     });
    },


   deleteCollection(id) {
      if (confirm("Are you sure you want to delete this collection? This action cannot be undone.")) {
        CollectionService.delete(id)
        .then(response => { 
      if (response.status === 204) {
        this.$router.go(0)
      }
    })
        .catch((error) => {
          console.error('Error deleting collection:', error);
          this.handleErrorResponse(error, 'deleting')
    
        
      });  
      }
    },

    handleErrorResponse(error, verb) {
      if (error.response) {
        if (error.response.status == 404) {
          this.$router.push({name: 'NotFoundView'});
        } else {
          this.$store.commit('SET_NOTIFICATION',
          `Error ${verb} topic. Response received was "${error.response.statusText}".`);
        }
      } else if (error.request) {
        this.$store.commit('SET_NOTIFICATION', `Error ${verb} topic. Server could not be reached.`);
      } else {
        this.$store.commit('SET_NOTIFICATION', `Error ${verb} topic. Request could not be created.`);
      }
    }
  },
    created(){
        // this.getCollections();
        // this.get(this.$route.params.collectionId);
        this.getCollection(this.$store.state.user.id)
    }



  };

</script>
<style scoped>

.collections-container {
  max-width: 400px;
  /* margin-top: 20px; */
  margin: 40px auto;
  text-align: center;
  padding: 0px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.title {
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  
}

.create-button {
  background: #f8c146;
  color: white;
  padding: 10px 15px;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
}

.create-button:hover {
  background: #d2932e;
}

.collections-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.collection-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8f9fa;
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.collection-button {
  flex: 1;
  background: #007bff;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s ease-in-out;
}

.collection-button:hover {
  background: #0056b3;
}

.delete-button {
  background: #f3481d;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.3s ease-in-out;
}

.delete-button:hover {
  background: #c82333;
}
</style>