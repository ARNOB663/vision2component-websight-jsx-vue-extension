<template>
  <div class="flex items-center justify-between p-4 bg-white">
    <img src="https://static.photos/fashion/300x300/13.webp" alt="Logo" class="h-10">
    <nav>
      <ul class="flex space-x-4">
        <li><a href="#" class="text-gray-800 hover:text-gray-500">Home</a></li>
        <li><a href="#" class="text-gray-800 hover:text-gray-500">Shop</a></li>
        <li><a href="#" class="text-gray-800 hover:text-gray-500">About</a></li>
        <li><a href="#" class="text-gray-800 hover:text-gray-500">Contact</a></li>
      </ul>
    </nav>
  </div>
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <div class="block relative h-48 rounded overflow-hidden">
          <img src="https://static.photos/fashion/900x600/14.webp" alt="Fashion" class="object-cover object-center w-full h-full block">
        </div>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">FASHION</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Our latest fashion trends</h2>
          <p class="mt-1">Discover our latest fashion trends, from the latest collections to the hottest trends.</p>
        </div>
      </div>
      <!-- Repeat the above div for each product -->
    </div>
  </div>
</template>

<script setup>
// Your script logic here if needed
</script>

<style scoped>
/* Add any scoped styles here */
</style>