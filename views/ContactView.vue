<template>
    <div class="contact">
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out to us!</p>
      <form @submit.prevent="handleSubmit">
        <div class="form">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="name" required />
        </div>
        <div class="form">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form">
          <label for="message">Message</label>
          <textarea id="message" v-model="message" required></textarea>
        </div>
        <button type="submit" class="btn">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactView',
    data() {
      return {
        name: '',
        email: '',
        message: '',
      };
    },
    methods: {
      handleSubmit() {
        console.log('Contact form submitted:', this.name, this.email, this.message);
        alert('Thank you for reaching out! We will get back to you soon.');
      },
    },
  };
  </script>

  <style>
.contact {
  max-width: 450px;
  margin: 40px auto;
  padding: 30px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.contact h1 {
  color: #ff5722;
  font-size: 2rem;
  margin-bottom: 10px;
}

.contact p {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 20px;
}

.form {
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 15px;
}

.form label {
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
}

.form input,
.form textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  transition: border 0.3s ease-in-out;
}

.form input:focus,
.form textarea:focus {
  border-color: #ff9800;
  outline: none;
  box-shadow: 0 0 5px rgba(255, 152, 0, 0.5);
}

.form textarea {
  height: 120px;
  resize: vertical;
}

.btn {
  background: linear-gradient(135deg, #ff9800, #ff5722);
  color: white;
  padding: 12px 20px;
  font-size: 1.1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease-in-out, transform 0.2s ease;
}

.btn:hover {
  background: linear-gradient(135deg, #ff5722, #ff9800);
  transform: translateY(-2px);
}



</style>