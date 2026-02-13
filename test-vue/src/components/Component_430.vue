<template>
  <div class="bg-gray-100">
    <header class="bg-white p-4 flex justify-between items-center">
      <img src="https://static.photos/real-estate/300x300/32.webp" alt="Logo" class="h-10">
      <nav class="hidden md:block">
        <ul class="flex space-x-4">
          <li><a href="#" class="text-gray-600 hover:text-gray-900">Home</a></li>
          <li><a href="#" class="text-gray-600 hover:text-gray-900">Properties</a></li>
          <li><a href="#" class="text-gray-600 hover:text-gray-900">About</a></li>
          <li><a href="#" class="text-gray-600 hover:text-gray-900">Contact</a></li>
        </ul>
      </nav>
      <button @click="toggleMenu" class="md:hidden">
        <!-- Hamburger icon -->
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5m-16.5 0H3.75M6.75 12h10.5m-10.5 0H6.75m6 5.25h3m-3 0h-3m-3 0h3m-3 0h3" />
        </svg>
      </button>
    </header>

    <main class="container mx-auto p-4">
      <!-- Your content here -->
    </main>

    <footer class="bg-white p-4 text-center">
      <p class="text-gray-600">© 2022 Real Estate Agency. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>