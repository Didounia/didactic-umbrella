<template>
    <div class="make-collection-container">
      <h1>Create New Collection</h1>
      
      <form @submit.prevent="makeCollection">
        <div class="form-group">
          <label for="collectionName">Name:</label>
          <input type="text" id="collectionName" v-model="newCollection.collectionName" required placeholder="Enter Collection name">
        </div>
  
  
        <button type="submit" class="submit-button"> Create Collection</button>
      </form>
    </div>
  </template>

  <script>
import CollectionService from '../services/CollectionService';
export default {

  data(){
    return{
     newCollection :{collectionName:"" }   
    }
  },


methods:{
makeCollection(){
   CollectionService.create(this.newCollection)
   .then((response) => {
        if(response.status === 201){
        this.$router.push({name:'collectionCart'});
        }
     })
     .catch(error => {
      console.error('Error adding:', error);
      this.handleErrorResponse(error, 'adding');
     });
    },
}
}
</script>
<style scoped>
.make-collection-container {
  max-width: 400px;
  margin: 40px auto;
  padding: 20px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  text-align: center;
}

h1 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 15px;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
  color: #444;
}

input {
  padding: 12px;
  font-size: 1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  transition: all 0.3s ease;
}

input:focus {
  border-color: #007bff;
  outline: none;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
}

.submit-button {
  background:  #f8c146;
  color: white;
  font-size: 1rem;
  padding: 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease-in-out, transform 0.2s;
}

.submit-button:hover {
  background: #0056b3;
  transform: translateY(-2px);
}
</style>