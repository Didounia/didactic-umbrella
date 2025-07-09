<template>
<header class="app-header">
<div class="logo">
 <img src="img/inter-1.png" alt="App Logo">
 </div>

 <nav  class="nav-links"  v-if="$store.state.token">
        
      <router-link v-bind:to="{name: 'home'}"  class="nav-links" >Home</router-link>
      <router-link v-bind:to="{name: 'about'}" class="nav-links" >About</router-link>
      <router-link  v-bind:to="{name: 'recipes'}" class="nav-links" >Recipes</router-link>
      <router-link  v-bind:to="{name: 'contact'}" class="nav-links" >Contact</router-link>
      <router-link  v-bind:to="{name: 'collectionCart'}" class="nav-links" >Collection Cart</router-link>
      <router-link v-bind:to="{ name: 'logout' }" class="nav-links"  v-if="$store.state.token">
          Logout
        </router-link>
        <router-link v-bind:to="{ name: 'login' }" class="nav-links" v-else>Login</router-link>
    
     </nav> 
 <SearchBox />
</header>

</template>

<script>
import SearchBox from "./SearchBox.vue"
export default {
  name: 'AppHeader',
  components: {
    SearchBox
  }
};
</script>


<style scoped>
/* .app-header {
  background-color: #42b983;
  color: white;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
} */


.app-header {
  
  background-color: #e9eceb;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #ddd;
}

.logo img {
  max-width: 180px;
  margin-bottom: 10px;
  margin-top: 15px;
}

.nav-links {
  display: flex;
  gap: 20px;
  font-size: 1rem;
  font-weight: bold;
}

.nav-links a {
  text-decoration: none;
  color: rgb(35, 5, 81);
  padding: 10px 15px;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
}


.nav-links a:hover {
  background: rgba(255, 255, 255, 0.2);
}

/* Active Link Indicator */
.nav-links a.router-link-exact-active {
  background: #fffbe6;
  color: #ff5722;
  border-radius: 8px;
  padding: 10px 15px;
}




</style>

