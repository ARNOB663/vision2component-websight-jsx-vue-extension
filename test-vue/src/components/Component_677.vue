<template>
  <div class="bg-fixed bg-center bg-cover h-screen flex items-end p-10" :style="{ backgroundImage: 'url(https://picsum.photos/1600/900)' }">
    <div class="bg-black bg-opacity-50 w-full h-full absolute"></div>
    <div class="text-white p-5">
      <h1 class="text-4xl">Art Gallery</h1>
      <p class="text-xl">Welcome to our art gallery, where you can find a wide variety of art pieces from various artists.</p>
    </div>
  </div>
  <nav class="flex justify-center p-5">
    <a href="#" class="px-5">Home</a>
    <a href="#" class="px-5">Exhibitions</a>
    <a href="#" class="px-5">Artists</a>
    <a href="#" class="px-5">Contact</a>
  </nav>
  <div class="container mx-auto p-5">
    <div class="grid grid-cols-3 gap-4">
      <div v-for="(artPiece, index) in artPieces" :key="index">
        <img :src="'https://static.photos/art/900x600/79.webp'" :alt="`Art Piece ${index + 1}`">
        <h2>{{ artPiece.title }}</h2>
        <p>{{ artPiece.artist }}</p>
      </div>
    </div>
  </div>
  <footer class="bg-gray-800 text-white p-5 text-center">
    <p>© 2022 Art Gallery. All rights reserved.</p>
    <!-- Add links to artist profiles and contact information here -->
  </footer>
</template>

<script setup>
const artPieces = [
  {
    image: 'https://picsum.photos/900/600',
    title: 'Art Piece 1',
    artist: 'Artist Name 1'
  },
  // Add more art pieces as needed
]
</script>