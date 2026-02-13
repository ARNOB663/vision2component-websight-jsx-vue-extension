<template>
  <nav class="bg-white p-6">
    <ul class="flex space-x-6">
      <li><a href="#" class="text-yellow-500">Properties for Sale</a></li>
      <li><a href="#" class="text-yellow-500">Properties for Rent</a></li>
      <li><a href="#" class="text-yellow-500">About Us</a></li>
    </ul>
  </nav>

  <div class="flex">
    <div class="w-1/2 p-6">
      <!-- Property image slider goes here -->
      <div class="carousel">
        <img src="https://static.photos/real-estate/900x600/166.webp" alt="Property Image 1" class="rounded-lg shadow-md">
        <img src="https://static.photos/real-estate/900x600/167.webp" alt="Property Image 2" class="rounded-lg shadow-md mt-4">
      </div>
    </div>
    <div class="w-1/2 p-6">
      <!-- Two-column layout for listings goes here -->
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-white rounded-lg shadow-md p-4">
          <h3 class="text-xl font-bold">Property 1</h3>
          <p class="text-gray-700">Description of Property 1</p>
        </div>
        <div class="bg-white rounded-lg shadow-md p-4">
          <h3 class="text-xl font-bold">Property 2</h3>
          <p class="text-gray-700">Description of Property 2</p>
        </div>
      </div>
    </div>
  </div>

  <div class="p-6">
    <h2 class="text-2xl mb-4">Contact Us</h2>
    <form @submit.prevent="handleSubmit">
      <input type="text" v-model="name" placeholder="Your name" class="block w-full p-2 mb-4">
      <input type="email" v-model="email" placeholder="Your email" class="block w-full p-2 mb-4">
      <textarea v-model="message" placeholder="Your message" class="block w-full p-2 mb-4"></textarea>
      <button type="submit" class="bg-yellow-500 text-white p-2">Send</button>
    </form>
  </div>

  <footer class="bg-white p-6">
    <p>© 2022 Real Estate Agency. All rights reserved.</p>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');

const handleSubmit = () => {
  // Handle form submission logic here
};
</script>

<style scoped>
.carousel img {
  width: 100%;
  height: auto;
}
</style>