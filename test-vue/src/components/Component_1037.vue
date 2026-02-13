<template>
  <header class="relative">
    <img src="https://static.photos/fashion/900x600/39.webp" alt="Header Image" class="w-full">
    <div class="absolute inset-0 flex items-center justify-center">
      <img src="https://static.photos/fashion/300x300/40.webp" alt="Logo" class="h-16">
    </div>
  </header>
  <nav class="flex justify-center items-center p-4">
    <input type="text" placeholder="Search..." class="px-4 py-2 rounded-l">
    <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-r">Search</button>
  </nav>
  <main class="container mx-auto p-4">
    <section class="mb-8">
      <h2 class="text-2xl mb-4">Featured Products</h2>
      <p class="mb-4">Discover our latest collection of stylish and comfortable clothing items.</p>
      <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Shop Now</button>
    </section>
    <!-- Repeat the section for each featured product -->
  </main>
</template>

<script setup>
// Your script logic here if needed
</script>

<style scoped>
/* Add any scoped styles here */
</style>