<template>
  <header class="bg-white p-4">
    <img src="https://picsum.photos/300" alt="Logo" class="h-10">
  </header>

  <nav class="bg-white p-4">
    <ul class="flex justify-around">
      <li><a href="#" class="text-purple-500 hover:text-purple-800">Home</a></li>
      <li><a href="#" class="text-purple-500 hover:text-purple-800">Collections</a></li>
      <li><a href="#" class="text-purple-500 hover:text-purple-800">About Us</a></li>
      <li><a href="#" class="text-purple-500 hover:text-purple-800">Contact</a></li>
    </ul>
  </nav>

  <main class="p-4">
    <h1 class="text-2xl font-bold mb-4">Latest Collections</h1>
    <div class="flex flex-wrap">
      <div class="w-full md:w-1/2 lg:w-1/3 p-4" v-for="(collection, index) in collections" :key="index">
        <img :src="'https://static.photos/fashion/900x600/55.webp'" alt="Fashion" class="mb-4">
        <p class="text-gray-700">{{ collection.description }}</p>
      </div>
    </div>
  </main>

  <footer class="bg-white p-4">
    <div class="flex justify-around">
      <a href="#" class="text-purple-500 hover:text-purple-800">Facebook</a>
      <a href="#" class="text-purple-500 hover:text-purple-800">Twitter</a>
      <a href="#" class="text-purple-500 hover:text-purple-800">Instagram</a>
    </div>
  </footer>
</template>

<script setup>
const collections = [
  {
    image: 'https://picsum.photos/900',
    description: 'This is a colorful and playful design with a prominent logo in the top-left corner. The main navigation menu spans the entire width of the page, and the homepage showcases the latest collections with large images and descriptive text.'
  },
  // Add more collections as needed
]
</script>