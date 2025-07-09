<template>
    <div class="search-box">
      <input id="search-input" type="text" v-model="query" placeholder="Search recipes..." />
      <button @click="handleSearch">  <font-awesome-icon icon="fa-solid fa-search" /></button>
      <label for ="search-input" class ="icon">
      <!-- <i class ="fas fa-search"></i> -->
     
    </label>
    </div>
  </template>

<script>

export default {
  name: 'SearchBox',
  data() {
    return {
      query: ''
    };
  },
  methods: {
    handleSearch() {
      this.$router.replace({name: 'SearchResults', params: {nameLike: this.query}})
      .then(()=> this.$router.go(0))
    }
  }
};
</script>

<style scoped>
.search-box {
  margin-top: 10px;
}

input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  padding: 10px 20px;
  background-color: white;
  color:  #f8c146;
  border: 1px solid  #f8c146;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color:#f8c146;
  color: white;
}



</style>