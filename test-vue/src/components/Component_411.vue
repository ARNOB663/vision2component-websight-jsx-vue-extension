<template>
  <div class="relative">
    <img src="https://static.photos/architecture/900x600/13.webp" alt="Building" class="w-full h-64 object-cover">
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="text-center text-white">
        <h1 class="text-4xl font-bold">Welcome to Our Architecture Firm</h1>
        <p class="text-xl mt-4">We are a full-service architecture firm specializing in residential, commercial, and institutional design.</p>
        <button class="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Contact Us
        </button>
      </div>
    </div>
  </div>

  <div class="flex mt-8">
    <div class="w-1/3 bg-white p-4">
      <h2 class="text-2xl font-bold mb-4">Portfolio</h2>
      <!-- Portfolio items go here -->
    </div>
    <div class="w-2/3 bg-white p-4 ml-4">
      <h2 class="text-2xl font-bold mb-4">About Us</h2>
      <!-- About us content goes here -->
    </div>
  </div>
</template>

<script setup>
// Your script logic can go here if needed
</script>

<style scoped>
/* Add any scoped styles here */
</style>