<template>
  <div class="bg-fixed bg-center bg-cover h-screen" :style="{ backgroundImage: 'url(\'https://static.photos/interior/1600x900/41.webp\')' }">
    <nav class="fixed top-0 w-full bg-white bg-opacity-75">
      <div class="container mx-auto px-4 py-2">
        <a href="#" class="text-gray-800 hover:text-gray-600">Home</a>
        <a href="#" class="ml-4 text-gray-800 hover:text-gray-600">About</a>
        <a href="#" class="ml-4 text-gray-800 hover:text-gray-600">Services</a>
        <a href="#" class="ml-4 text-gray-800 hover:text-gray-600">Contact</a>
      </div>
    </nav>
    <div class="container mx-auto px-4 h-full flex items-center justify-center">
      <div class="text-center text-white">
        <h1 class="text-5xl">Welcome to Our Interior Design Studio</h1>
        <p class="text-2xl mt-4">We are a team of passionate interior designers who strive to create spaces that reflect the individuality and style of each client.</p>
        <a href="#" class="mt-8 inline-block px-8 py-4 bg-white text-gray-800 hover:bg-gray-300 rounded">Get a Quote</a>
      </div>
    </div>
  </div>
</template>

<script setup>
// No script needed for this example
</script>