<template>
  <header class="w-full">
    <img src="https://picsum.photos/seed/227/900/600" alt="Header Image" class="w-full">
  </header>
  <nav class="bg-white p-4 shadow flex justify-end">
    <ul class="flex space-x-4">
      <li><a href="#" class="text-gray-600 hover:text-gray-800">Home</a></li>
      <li><a href="#" class="text-gray-600 hover:text-gray-800">Products</a></li>
      <li><a href="#" class="text-gray-600 hover:text-gray-800">About</a></li>
      <li><a href="#" class="text-gray-600 hover:text-gray-800">Contact</a></li>
    </ul>
  </nav>
  <main class="container mx-auto p-4 flex">
    <aside class="w-1/4 p-4">
      <h2 class="text-xl mb-4">Filters</h2>
      <!-- Add your filters here -->
    </aside>
    <section class="w-2/4 p-4">
      <h2 class="text-xl mb-4">Products</h2>
      <!-- Add your products here -->
    </section>
    <aside class="w-1/4 p-4">
      <h2 class="text-xl mb-4">Related Products</h2>
      <!-- Add your related products here -->
    </aside>
  </main>
  <footer class="bg-white p-4 shadow text-center">
    <p class="text-gray-600">© 2022 Fashion Brand. All rights reserved.</p>
  </footer>
</template>

<script setup>
// Your script logic here
</script>

<style scoped>
/* Your scoped styles here */
</style>