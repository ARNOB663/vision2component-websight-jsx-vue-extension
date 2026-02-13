<template>
  <div class="bg-gray-100">
    <header class="flex justify-center items-center h-64">
      <img src="https://picsum.photos/300" alt="Logo" class="h-32">
    </header>
    <main class="flex flex-wrap -mx-4">
      <div v-for="(artPiece, index) in artPieces" :key="index" class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
        <div class="bg-white rounded shadow p-4">
          <img :src="'https://static.photos/art/900x600/184.webp'" alt="Art Piece" class="w-full h-64 object-cover mb-4">
          <h2 class="text-xl font-bold mb-2">{{ artPiece.artist }}</h2>
          <p class="text-gray-600 mb-2">Medium: {{ artPiece.medium }}</p>
          <p class="text-gray-600">Price: ${{ artPiece.price }}</p>
        </div>
      </div>
    </main>
    <aside class="w-full md:w-1/3 lg:w-1/4 px-4 mb-8">
      <div class="bg-white rounded shadow p-4">
        <h2 class="text-xl font-bold mb-4">Upcoming Events</h2>
        <!-- Add your events here -->
      </div>
    </aside>
    <aside class="w-full md:w-1/3 lg:w-1/4 px-4 mb-8">
      <div class="bg-white rounded shadow p-4">
        <h2 class="text-xl font-bold mb-4">Related Artist Spotlights</h2>
        <!-- Add your spotlights here -->
      </div>
    </aside>
  </div>
</template>

<script setup>
const artPieces = [
  {
    image: 'https://picsum.photos/900',
    artist: 'Artist Name',
    medium: 'Oil on Canvas',
    price: '1000'
  },
  // Add more art pieces as needed
]
</script>