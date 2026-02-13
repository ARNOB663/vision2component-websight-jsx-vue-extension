<template>
  <div class="container mx-auto px-4">
    <header class="flex items-center justify-between py-6">
      <h1 class="text-3xl font-bold">Fashion Brand</h1>
      <nav>
        <ul class="flex space-x-4">
          <li><a href="#" class="text-gray-600 hover:text-gray-800">Home</a></li>
          <li><a href="#" class="text-gray-600 hover:text-gray-800">Shop</a></li>
          <li><a href="#" class="text-gray-600 hover:text-gray-800">About</a></li>
          <li><a href="#" class="text-gray-600 hover:text-gray-800">Contact</a></li>
        </ul>
      </nav>
    </header>

    <section class="relative">
      <img src="https://static.photos/fashion/900x600/67.webp" alt="Fashion Brand" class="w-full">
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="text-center">
          <h2 class="text-4xl font-bold text-white">Welcome to Fashion Brand</h2>
          <p class="text-xl text-white mt-4">We are a vibrant, colorful brand that offers the latest fashion trends.</p>
          <button class="mt-6 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Shop Now</button>
        </div>
      </div>
    </section>

    <section class="py-12">
      <h2 class="text-3xl font-bold mb-6">Categories</h2>
      <!-- Add your categories here -->
    </section>

    <section class="py-12">
      <h2 class="text-3xl font-bold mb-6">Search</h2>
      <!-- Add your search functionality here -->
    </section>

    <section class="py-12">
      <h2 class="text-3xl font-bold mb-6">Suggested Items</h2>
      <!-- Add your suggested items here -->
    </section>

    <footer class="py-6 text-center text-gray-600">
      <p>&copy; 2022 Fashion Brand. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
// Your script logic here
</script>

<style scoped>
/* Your scoped styles here */
</style>