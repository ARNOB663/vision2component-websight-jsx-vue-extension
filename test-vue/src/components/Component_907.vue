<template>
  <div>
    <header class="flex items-center justify-center h-screen bg-cover bg-center" :style="{ backgroundImage: 'url(\'https://static.photos/business/1600x900/108.webp\')' }">
      <img src="https://static.photos/business/300x300/109.webp" alt="Logo" class="h-16">
    </header>
    <nav class="flex justify-center p-4 bg-green-800">
      <ul class="flex space-x-4">
        <li><a href="#" class="text-pink-300 hover:text-white">Home</a></li>
        <li><a href="#" class="text-pink-300 hover:text-white">About</a></li>
        <li><a href="#" class="text-pink-300 hover:text-white">Services</a></li>
        <li><a href="#" class="text-pink-300 hover:text-white">Contact</a></li>
      </ul>
    </nav>
    <main class="container mx-auto p-4">
      <h1 class="text-4xl text-center mb-4">Welcome to Our Energy Company</h1>
      <p class="text-lg mb-4">
        At our energy company, we are committed to providing our customers with the best possible service. We believe in the power of renewable energy and strive to make our services as sustainable and reliable as possible. Our team of experts is dedicated to ensuring that our customers have access to the best possible energy solutions, no matter where they are in the world.
      </p>
      <!-- Add more sections as needed -->
    </main>
  </div>
</template>

<script setup>
// No script setup needed for this example
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>