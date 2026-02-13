<template>
  <div class="bg-indigo-100">
    <header class="relative">
      <img src="https://static.photos/business/900x600/133.webp" alt="Header Image" class="w-full">
      <button @click="toggleMenu" class="absolute top-0 right-0 m-4 p-2 bg-indigo-500 text-white rounded-full">
        <i class="fas fa-bars"></i>
      </button>
    </header>
    <nav v-if="isMenuOpen" class="bg-indigo-500 text-white p-4">
      <ul class="flex space-x-4">
        <li><a href="#" class="text-white">Home</a></li>
        <li><a href="#" class="text-white">About</a></li>
        <li><a href="#" class="text-white">Services</a></li>
        <li><a href="#" class="text-white">Contact</a></li>
      </ul>
    </nav>
    <main class="container mx-auto p-4">
      <h1 class="text-3xl mb-4">Welcome to Our Tech Company</h1>
      <p class="mb-4">
        At our tech company, we are dedicated to providing the best in technology solutions. Our team of experts is committed to delivering innovative and efficient solutions that meet the needs of our clients. We are passionate about technology and are always looking for new and innovative ways to improve our services.
      </p>
      <!-- Add your content here -->
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>