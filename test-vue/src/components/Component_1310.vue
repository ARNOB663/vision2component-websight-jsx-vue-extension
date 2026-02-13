<template>
  <div class="relative bg-black text-white min-h-screen overflow-hidden">
    <img src="https://static.photos/travel/900x600/112.webp" class="w-full h-screen object-cover" alt="Image">
    <div class="absolute inset-0 flex items-center justify-center">
      <img src="https://static.photos/travel/300x300/113.webp" class="w-1/2" alt="Image">
    </div>
    <button @click="toggleNav" class="fixed top-4 right-4 z-50 bg-white text-black rounded-full p-2 cursor-pointer">
      <svg v-if="!isNavOpen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
        <path d="M3 6v12h18V6H3zm18 0h-3V4h-6v2h6v12h3z"/>
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
        <path d="M6 19h12v-2H6v2zM6 7h8v2H6V7zM6 13h12v2H6v-2z"/>
      </svg>
    </button>
    <nav :class="{ 'block': isNavOpen, 'hidden': !isNavOpen }" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md px-4 py-6 bg-white shadow-lg rounded-lg">
      <!-- Your navigation links here -->
    </nav>
  </div>
  <main class="container mx-auto p-4 mt-24">
    <h1 class="text-4xl mb-4">Welcome to Our Design Agency</h1>
    <p class="mb-4">
      At our design agency, we specialize in creating unique and innovative designs that not only look great, but also effectively communicate your message. Our team of experienced designers work closely with you to understand your vision and translate it into a stunning design. Whether you're looking for a logo, a website, or a brand identity, we're here to help.
    </p>
    <!-- Add more content as needed -->
  </main>
</template>

<script setup>
import { ref } from 'vue';

const isNavOpen = ref(false);

const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value;
};
</script>