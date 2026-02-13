<template>
  <header class="flex justify-center items-center h-64 bg-white text-black">
    <h1 class="text-4xl">Art Gallery</h1>
  </header>

  <nav class="bg-gray-800 p-4">
    <ul class="flex space-x-4">
      <li><a href="#" class="text-white">Artist 1</a></li>
      <li><a href="#" class="text-white">Artist 2</a></li>
      <li><a href="#" class="text-white">Artist 3</a></li>
    </ul>
  </nav>

  <main class="grid grid-cols-3 gap-4 p-4">
    <div v-for="(image, index) in images" :key="index" class="relative">
      <img :src="'https://static.photos/art/900x600/10.webp'" :alt="'Art ' + (index + 1)" class="w-full h-auto">
      <div class="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition duration-300">
        <p class="absolute bottom-0 right-0 text-white p-2">{{ image.details }}</p>
      </div>
    </div>
  </main>
</template>

<script setup>
const images = [
  { src: 'https://static.photos/art/900x600/10.webp', details: 'Art 1 details' },
  // Add more images as needed
]
</script>

<style scoped>
/* Add any additional styles here */
</style>