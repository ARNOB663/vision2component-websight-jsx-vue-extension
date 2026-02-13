<template>
  <header class="bg-white p-4 shadow">
    <nav class="flex justify-between">
      <div>
        <a href="#" class="text-lg font-bold text-gray-800">Restaurant Name</a>
      </div>
      <div>
        <a href="#" class="text-gray-600 hover:text-gray-800 mr-4">Menu</a>
        <a href="#" class="text-white bg-yellow-500 hover:bg-yellow-700 px-4 py-2 rounded">Reserve</a>
      </div>
    </nav>
  </header>

  <main class="flex p-4">
    <aside class="w-1/4 p-4">
      <h2 class="text-lg font-bold mb-4">About Us</h2>
      <p class="text-gray-600">
        We are a family-owned restaurant dedicated to providing the best food in the city. Our menu features a variety of dishes made with fresh, locally sourced ingredients.
      </p>
      <h2 class="text-lg font-bold mb-4 mt-8">Events</h2>
      <p class="text-gray-600">
        We host a variety of events throughout the year. Check our events page for more information.
      </p>
      <h2 class="text-lg font-bold mb-4 mt-8">Catering</h2>
      <p class="text-gray-600">
        We offer catering services for all types of events. Contact us for more information.
      </p>
    </aside>

    <section class="w-3/4 p-4">
      <h1 class="text-2xl font-bold mb-4">Welcome to Our Restaurant</h1>
      <img src="https://static.photos/restaurant/900x600/138.webp" alt="Food" class="mb-4">
      <p class="text-gray-600">
        Our restaurant is known for its delicious food and warm, friendly service. We are proud to serve the community and look forward to welcoming you soon.
      </p>
    </section>
  </main>

  <footer class="bg-white p-4 shadow">
    <div class="flex justify-between">
      <div>
        <h2 class="text-lg font-bold mb-4">Sign Up for Our Newsletter</h2>
        <form @submit.prevent="handleNewsletterSignup">
          <input type="email" v-model="email" placeholder="Enter your email" class="w-full p-2 mb-4">
          <button type="submit" class="bg-yellow-500 hover:bg-yellow-700 text-white px-4 py-2 rounded">Sign Up</button>
        </form>
      </div>
      <div>
        <h2 class="text-lg font-bold mb-4">Follow Us</h2>
        <a href="#" class="text-gray-600 hover:text-gray-800 mr-4">Facebook</a>
        <a href="#" class="text-gray-600 hover:text-gray-800 mr-4">Twitter</a>
        <a href="#" class="text-gray-600 hover:text-gray-800">Instagram</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');

const handleNewsletterSignup = () => {
  // Handle newsletter signup logic here
};
</script>