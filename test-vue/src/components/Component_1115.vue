<template>
  <header class="flex justify-between items-center p-4 bg-black text-white">
    <div>
      <h1 class="text-4xl">Art Gallery</h1>
    </div>
    <div>
      <button class="bg-white text-black px-4 py-2 rounded">Book Now</button>
    </div>
  </header>
  <main class="grid grid-cols-3 gap-4 p-4 bg-black text-white">
    <div v-for="(artwork, index) in artworks" :key="index" class="bg-white text-black p-4">
      <img :src="'https://static.photos/art/900x600/117.webp'" :alt="artwork.title">
      <p class="mt-2">{{ artwork.description }}</p>
    </div>
  </main>
</template>

<script setup>
const artworks = [
  {
    image: 'https://static.photos/art/900x600/117.webp',
    title: 'Artwork 1',
    description: 'This is a beautiful piece of artwork. It\'s a masterpiece of modern art. The colors are vibrant and the brush strokes are flowing. The artist has captured the beauty of the moment in a way that is timeless.'
  },
  // Add more artworks as needed
]
</script>

<style scoped>
/* Add any additional styles here */
</style>