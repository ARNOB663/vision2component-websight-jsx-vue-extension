<template>
  <header class="flex items-center justify-between bg-white p-4">
    <img src="https://static.photos/art/300x300/6.webp" alt="Logo" class="h-10">
    <nav class="hidden md:block">
      <ul class="flex space-x-4">
        <li><a href="#" class="text-gray-800 hover:text-indigo-500">Home</a></li>
        <li><a href="#" class="text-gray-800 hover:text-indigo-500">About</a></li>
        <li><a href="#" class="text-gray-800 hover:text-indigo-500">Portfolio</a></li>
        <li><a href="#" class="text-gray-800 hover:text-indigo-500">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main class="container mx-auto my-8 px-4">
    <!-- Masonry grid layout -->
    <div class="columns-2 md:columns-3 lg:columns-4">
      <!-- Replace with your images -->
      <img src="https://static.photos/art/900x600/7.webp" alt="Architecture" class="mb-4">
      <!-- Repeat for other images -->
    </div>
  </main>

  <footer class="bg-white p-4 text-center text-gray-800">
    <p>© 2022 Architectural Firm. All rights reserved.</p>
  </footer>
</template>

<script setup>
// Your script logic here if needed
</script>

<style scoped>
/* Add any custom styles here */
</style>