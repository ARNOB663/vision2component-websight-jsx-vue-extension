<template>
  <header class="flex items-center justify-between p-4 bg-white">
    <img src="https://static.photos/business/300x300/37.webp" alt="Logo" class="h-10">
    <nav class="flex items-center">
      <a href="#" class="px-4 py-2 text-gray-800 hover:text-gray-600">Home</a>
      <a href="#" class="px-4 py-2 text-gray-800 hover:text-gray-600">About</a>
      <a href="#" class="px-4 py-2 text-gray-800 hover:text-gray-600">Services</a>
      <a href="#" class="px-4 py-2 text-gray-800 hover:text-gray-600">Contact</a>
    </nav>
  </header>

  <main class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">Welcome to Our Tech Company</h1>
    <p class="mb-4">
      At our tech company, we are dedicated to providing innovative and reliable solutions for all your technology needs. Our team of experts is committed to delivering the best possible service to our clients. Whether you're looking for a new website, a custom software solution, or a consultation on the latest technology trends, we're here to help.
    </p>
    <div class="flex justify-center">
      <input type="text" placeholder="Search..." class="px-4 py-2 rounded-l">
      <button class="px-4 py-2 bg-purple-500 text-white rounded-r">Search</button>
    </div>
  </main>

  <footer class="p-4 bg-white text-center text-gray-800">
    &copy; 2022 Tech Company. All rights reserved.
  </footer>
</template>

<script setup>
// No script needed for this simple template
</script>

<style scoped>
/* Add any scoped styles if necessary */
</style>