<template>
  <div class="flex flex-col items-center justify-center h-screen bg-cover bg-center"
       :style="{ backgroundImage: `url(${backgroundImage})` }">
    <img src="https://static.photos/art/300x300/132.webp" alt="Creative Agency Logo" class="w-1/2 mb-4">
    <h1 class="text-4xl font-bold text-center text-white">Welcome to Our Creative Agency</h1>
    <p class="text-xl text-center text-white mb-4">
      At our agency, we believe in the power of creativity. We are a team of passionate designers, developers, and strategists who are dedicated to creating unique and engaging digital experiences. We specialize in a wide range of services including web design, graphic design, branding, and more. Whether you're looking for a simple brochure website or a complex e-commerce platform, we've got you covered.
    </p>
    <nav class="fixed bottom-0 w-full bg-black text-white text-center py-4">
      <ul class="flex justify-around">
        <li><a href="#" class="hover:text-gray-300">Home</a></li>
        <li><a href="#" class="hover:text-gray-300">About</a></li>
        <li><a href="#" class="hover:text-gray-300">Services</a></li>
        <li><a href="#" class="hover:text-gray-300">Contact</a></li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const backgroundImage = ref('https://static.photos/art/300x300/132.webp');

onMounted(() => {
  // Change background image dynamically here if needed
});
</script>

<style scoped>
/* Add any additional styles here */
</style>