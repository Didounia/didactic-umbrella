<template>
    <div class="about">
      <h1>About Us</h1>
      <div class="about-container">
      <p>This application provides a wide variety of recipes to inspire your next meal.
        A lot of people want to try new foods but don't know the variety that is out there and how to go about it
        This platform allows users to have access to all kinds of food recipes across the world and
        different cultures all in one place.
      </p>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutView',
  };
  </script>


 <style scoped>
.about-container {
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  text-align: center;
}

h1 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 15px;
  font-weight: bold;
}



p {
  font-size: 1.2rem;
  color: #444;
  line-height: 1.6;
  text-align: justify;
}
</style>