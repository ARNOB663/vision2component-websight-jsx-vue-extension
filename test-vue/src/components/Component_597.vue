<template>
  <header class="flex justify-center items-center h-64">
    <img src="https://picsum.photos/300" alt="Art Gallery Logo" class="h-32">
  </header>
  <nav class="flex justify-center items-center h-16">
    <ul class="flex space-x-4">
      <li><a href="#" class="hover:text-gray-400">Home</a></li>
      <li><a href="#" class="hover:text-gray-400">Artworks</a></li>
      <li><a href="#" class="hover:text-gray-400">Artists</a></li>
      <li><a href="#" class="hover:text-gray-400">About</a></li>
      <li><a href="#" class="hover:text-gray-400">Contact</a></li>
    </ul>
  </nav>
  <main class="grid grid-cols-3 gap-4 p-4">
    <div v-for="(artwork, index) in artworks" :key="index" class="border border-white">
      <img :src="'https://static.photos/art/900x600/199.webp'" :alt="`Artwork ${index + 1}`">
      <h2>{{ artwork.title }}</h2>
      <p>{{ artwork.description }}</p>
    </div>
  </main>
</template>

<script setup>
const artworks = [
  {
    image: 'https://picsum.photos/900',
    title: 'Artwork 1',
    description: 'This is a beautiful piece of art. It is a masterpiece of the artist\'s skill and creativity.'
  },
  // Add more artworks as needed
]
</script>

<style scoped>
/* Add any additional styles here */
</style>