


<template>
  <div class="recipe-categories">
    <h1>Recipe Categories</h1>
    <div v-if="isLoading" class="loading">Loading categories...</div>
    <div v-else class="category-grid">
      <div v-for="category in categories" :key="category.categoryId" class="category-card">
        <router-link :to="`/category/${category.categoryId}`">
          <div class="category-image" :style="{ backgroundImage: `url(${getCategoryImage(category.categoryName)})` }">
            <div class="overlay">
              <span>{{ category.categoryName }}</span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryService from '../services/CategoryService';

export default {
  data() {
    return {
      categories: [],
      isLoading: true,
      categoryImages: {
        "African Food": "https://images.rawpixel.com/image_png_social_square/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8xMF92ZWN0b3JfaWxsdXN0cmF0aW9uX29mX2FmcmljYW5fd29tYW5faW5fYWZyaV84NDljZWZhOC1iYmNhLTQ0YTktYjg4Yi1iYjZjMzc3ODE5YjVfMS5wbmc.png",
        "Mediterranean": "https://target.scene7.com/is/image/Target/GUEST_21aeaefb-00c9-48f7-853d-41bb0dd5c2e9?wid=1200&hei=1200&qlt=80&fmt=webp",
        "Indian": "https://i.pinimg.com/736x/ac/94/35/ac9435b1dae07a86462fa6fa691498c4.jpg",
        "Latin American": "https://i.pinimg.com/736x/1c/3a/b4/1c3ab4b8f11f32ba76bf5eac7c415622.jpg",
        "Chinese": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXXt5iF1QeC4WkpP4OpKQk_tyVU6xYoFmp6g&s",
        "Caribbean": "https://i.pinimg.com/736x/67/9e/ad/679ead4ac63c16e08608efc1f3330a6a.jpg",
        "European": "https://i.pinimg.com/736x/3e/43/f1/3e43f19b9fb6965cb00f22103ecdc767.jpg",
        "African American Soul Food": "https://i.pinimg.com/736x/e0/34/c3/e034c3a5a3a9f928b89c43a112d7e2c1.jpg",
        "American Foods": "https://i.pinimg.com/736x/0d/6b/ce/0d6bcec03b186ae12138d256251e87ec.jpg",
      },
    };
  },
  methods: {
    getCategory() {
      CategoryService.list().then((response) => {
        this.isLoading = false;
        this.categories = response.data;
      });
    },
    getCategoryImage(categoryName) {
      return this.categoryImages[categoryName] || "/images/default.jpg";
    },
  },
  created() {
    this.getCategory();
  },
};
</script>


<style scoped>
.recipe-categories {
  text-align: center;
  padding: 20px;
  background-color: #f9f9f9;
 
  
}

h1 {
  font-size: 1.3em;
  font-weight: lighter;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  
  color: #343a40;
  margin-bottom: 20px;
}

 .loading {
  font-size: 1.5em;
  color: #888;
  text-align: center;
  margin-top: 20px;
} 


.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 20px;
  padding: 20px;
  justify-items: center;
}


.category-card {
  position: relative;
  width: 100%;
  max-width: 100px;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  
}

.category-card:hover {
  transform: scale(1.05);
}


.category-image {
  width: 100%;
  height: 100px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  
  
}

/* Overlay for text */
.overlay {
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  padding: 2px 0;
  text-align: center;
}



.overlay span {
  
  color: white;
  font-size: 0.5em;
  font-weight: bold;
  text-transform: uppercase;
  
}
</style>
