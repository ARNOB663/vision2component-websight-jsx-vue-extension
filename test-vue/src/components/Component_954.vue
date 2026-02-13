<template>
  <header class="bg-cover bg-center h-screen" :style="{ backgroundImage: 'url(https://picsum.photos/1600/900)' }">
    <div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center h-full">
      <div class="text-center">
        <h1 class="text-5xl font-bold text-white leading-tight mt-0 mb-2">Art Gallery</h1>
        <p class="text-2xl font-light text-white mb-8">Explore the world of art with us</p>
      </div>
    </div>
  </header>

  <section class="container mx-auto px-6 pt-10 pb-8">
    <h2 class="text-4xl font-bold text-center text-gray-800 mb-8">Featured Artists</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div v-for="(artist, index) in artists" :key="index" class="bg-white rounded-lg shadow-lg overflow-hidden">
        <img class="w-full" :src="'https://static.photos/art/900x600/156.webp'" :alt="artist.name">
        <div class="p-6">
          <h3 class="text-xl font-bold mb-2">{{ artist.name }}</h3>
          <p class="text-gray-700 text-base">{{ artist.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const artists = [
  {
    name: "Artist 1",
    description: "Artist 1 is a renowned artist known for his unique style of painting. His works are characterized by bold colors and a unique perspective.",
    image: "https://picsum.photos/900/600"
  },
  // Add more artists as needed
]
</script>