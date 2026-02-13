<template>
  <header class="bg-white p-4 flex justify-between items-center">
    <div class="flex items-center">
      <img src="https://static.photos/fashion/300x300/96.webp" alt="Logo" class="h-10">
      <nav class="ml-10">
        <ul class="flex">
          <li class="mr-5"><a href="#" class="text-gray-600 hover:text-gray-900">Home</a></li>
          <li class="mr-5"><a href="#" class="text-gray-600 hover:text-gray-900">Shop</a></li>
          <li><a href="#" class="text-gray-600 hover:text-gray-900">About</a></li>
        </ul>
      </nav>
    </div>
    <div>
      <a href="#" class="text-gray-600 hover:text-gray-900 mr-5">Cart</a>
      <input type="text" placeholder="Search" class="border rounded p-2">
    </div>
  </header>

  <main class="flex p-4">
    <div class="w-1/3 mr-5">
      <h2 class="text-xl mb-4">Categories</h2>
      <!-- Categories go here -->
    </div>
    <div class="w-1/3 mr-5">
      <h2 class="text-xl mb-4">Products</h2>
      <!-- Products go here -->
    </div>
    <div class="w-1/3">
      <h2 class="text-xl mb-4">Related Products</h2>
      <!-- Related products go here -->
    </div>
  </main>

  <footer class="bg-white p-4 text-center">
    <p class="text-gray-600">Shipping and return policy information goes here.</p>
  </footer>
</template>

<script setup>
// Your script logic can go here if needed
</script>

<style scoped>
/* Add any scoped styles here */
</style>