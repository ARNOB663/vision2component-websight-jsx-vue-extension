<template>
  <div class="relative bg-cover bg-center h-screen" :style="{ backgroundImage: 'url(https://picsum.photos/seed/99/1600/900)' }">
    <div class="container mx-auto px-4 py-12">
      <div class="flex justify-center">
        <img src="https://picsum.photos/seed/99/300/300" alt="Logo" class="h-16">
      </div>
      <nav class="flex justify-center mt-4">
        <ul class="flex space-x-4">
          <li><a href="#" class="text-gray-800 hover:text-gray-600">New Arrivals</a></li>
          <li><a href="#" class="text-gray-800 hover:text-gray-600">Best Sellers</a></li>
          <li><a href="#" class="text-gray-800 hover:text-gray-600">Sale</a></li>
        </ul>
      </nav>
    </div>
  </div>

  <div class="container mx-auto px-4 py-12">
    <h2 class="text-2xl font-bold mb-4">New Arrivals</h2>
    <div class="grid grid-cols-3 gap-4">
      <!-- Add your products here -->
    </div>

    <h2 class="text-2xl font-bold mb-4 mt-8">Best Sellers</h2>
    <div class="grid grid-cols-3 gap-4">
      <!-- Add your products here -->
    </div>

    <h2 class="text-2xl font-bold mb-4 mt-8">Sale</h2>
    <div class="grid grid-cols-3 gap-4">
      <!-- Add your products here -->
    </div>
  </div>
</template>

<script setup>
// Your script setup logic here
</script>

<style scoped>
/* Your scoped styles here */
</style>