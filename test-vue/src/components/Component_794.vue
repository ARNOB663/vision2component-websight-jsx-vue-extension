<template>
  <div>
    <header class="flex justify-center items-center h-screen bg-cover bg-center" :style="{ backgroundImage: 'url(https://static.photos/art/1600x900/195.webp)' }">
      <img src="https://static.photos/art/300x300/196.webp" alt="Logo" class="w-1/3">
    </header>

    <nav class="flex justify-center items-center space-x-4 py-4 bg-gray-800 text-white">
      <router-link to="/authors" class="px-3 py-2 rounded-md text-white bg-gray-700">Authors</router-link>
      <router-link to="/genres" class="px-3 py-2 rounded-md text-white bg-gray-700">Genres</router-link>
      <router-link to="/news" class="px-3 py-2 rounded-md text-white bg-gray-700">News</router-link>
    </nav>

    <main class="container mx-auto p-4">
      <!-- Your book covers and individual book pages go here -->
    </main>

    <footer class="bg-gray-800 text-white text-center p-4">
      <p>© 2022 Publishing House. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
// Import necessary components if any
</script>

<style scoped>
/* Add any additional styles here */
</style>