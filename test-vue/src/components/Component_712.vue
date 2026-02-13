<template>
  <header class="flex justify-center items-center h-64">
    <img src="https://static.photos/art/300x300/114.webp" alt="Logo" class="h-32">
  </header>
  <nav class="flex justify-center items-center h-16 bg-gray-800">
    <ul class="flex space-x-8">
      <li><a href="#about" class="hover:text-gray-400">About</a></li>
      <li><a href="#artists" class="hover:text-gray-400">Artists</a></li>
      <li><a href="#artworks" class="hover:text-gray-400">Artworks</a></li>
      <li><a href="#contact" class="hover:text-gray-400">Contact</a></li>
    </ul>
  </nav>
  <main class="flex justify-center items-center h-screen">
    <div class="flex space-x-8">
      <div class="w-1/2">
        <img src="https://static.photos/art/900x600/115.webp" alt="Artwork">
        <p>This is a beautiful piece of art by the artist. It is a masterpiece of the artist's style. The artist used a unique technique to create this piece.</p>
      </div>
      <div class="w-1/2">
        <img src="https://static.photos/art/900x600/116.webp" alt="Artist">
        <p>This is the artist. He is a well-known artist in the field of art. He has been creating art for many years and has a unique style.</p>
      </div>
    </div>
  </main>
</template>

<script setup>
// No script needed for this simple example
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>