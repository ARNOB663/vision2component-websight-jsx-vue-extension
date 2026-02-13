<template>
  <header class="bg-white shadow">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <img class="h-8 w-auto sm:h-10" src="https://static.photos/fashion/300x300/167.webp" alt="Logo">
        </div>
        <nav class="flex items-center">
          <a href="#" class="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">Home</a>
          <a href="#" class="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">Products</a>
          <a href="#" class="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">About</a>
          <a href="#" class="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">Contact</a>
        </nav>
      </div>
    </div>
  </header>

  <main class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col lg:flex-row">
      <aside class="w-full lg:w-1/4 p-4">
        <h2 class="text-lg font-medium mb-4">Product Categories</h2>
        <!-- Add your product categories here -->
      </aside>

      <div class="w-full lg:w-3/4 p-4">
        <h1 class="text-2xl font-medium mb-4">Product Listings</h1>
        <!-- Add your product listings here -->
      </div>
    </div>
  </main>

  <footer class="bg-white shadow mt-8">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <p class="text-center text-gray-600">© 2022 Your Company Name. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
// Add your script logic here if needed
</script>

<style scoped>
/* Add your scoped styles here */
</style>