<template>
  <div class="bg-black text-white flex flex-col items-center justify-center min-h-screen py-2">
    <header class="text-center">
      <h1 class="text-4xl mb-3">Welcome to Our Art Gallery</h1>
      <p class="text-xl mb-6">Explore our collection of beautiful and unique art pieces.</p>
    </header>

    <main class="grid grid-cols-3 gap-4">
      <img src="https://static.photos/art/900x600/3.webp" alt="Art Piece 1" class="hover:scale-110 transition-transform">
      <img src="https://static.photos/art/900x600/4.webp" alt="Art Piece 2" class="hover:scale-110 transition-transform">
      <img src="https://static.photos/art/900x600/5.webp" alt="Art Piece 3" class="hover:scale-110 transition-transform">
      <!-- Add more images as needed -->
    </main>

    <footer class="mt-6">
      <p>© 2022 Art Gallery. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
// No script setup needed for this simple template
</script>

<style scoped>
/* Tailwind CSS styles are already included via CDN */
</style>