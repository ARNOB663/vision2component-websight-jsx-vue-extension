<template>
  <div class="relative w-full h-screen overflow-hidden">
    <video autoplay loop muted class="absolute inset-0 object-cover w-full h-full">
      <source src="https://static.photos/technology/900x600/186.webp" type="video/mp4">
    </video>
    <nav class="sticky top-0 bg-gray-800 p-4 flex justify-between">
      <div>
        <a href="#" class="text-indigo-400 hover:text-white">Home</a>
        <a href="#" class="text-indigo-400 hover:text-white ml-4">About</a>
        <a href="#" class="text-indigo-400 hover:text-white ml-4">Services</a>
        <a href="#" class="text-indigo-400 hover:text-white ml-4">Contact</a>
      </div>
      <div>
        <a href="#" class="text-indigo-400 hover:text-white">Login</a>
      </div>
    </nav>
    <div class="flex justify-center items-center h-screen">
      <div class="text-center">
        <h1 class="text-6xl font-bold mb-4">Welcome to Our Tech Company</h1>
        <p class="text-2xl mb-8">We are a leading provider of innovative technology solutions. Our mission is to empower businesses with the tools they need to succeed in the digital age.</p>
        <a href="#" class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">Learn More</a>
      </div>
    </div>
  </div>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Add any additional styles here if needed */
</style>