<template>
  <header class="bg-cover bg-center h-screen flex items-center justify-center" :style="{ backgroundImage: 'url(https://static.photos/business/1600x900/56.webp)' }">
    <div class="text-center">
      <h1 class="text-4xl text-white font-bold mb-4">Welcome to Our Food and Beverage Company</h1>
      <p class="text-xl text-white mb-6">We are a company dedicated to providing the best food and beverage experiences for our customers.</p>
      <button class="bg-white text-gray-500 font-bold py-2 px-4 rounded">Learn More</button>
    </div>
  </header>

  <nav class="bg-gray-500 text-white p-4">
    <ul class="flex space-x-4 justify-center">
      <li><a href="#" class="hover:text-gray-200">Home</a></li>
      <li><a href="#" class="hover:text-gray-200">About</a></li>
      <li><a href="#" class="hover:text-gray-200">Menu</a></li>
      <li><a href="#" class="hover:text-gray-200">Contact</a></li>
    </ul>
  </nav>

  <footer class="bg-gray-500 text-white p-4">
    <div class="flex flex-col items-center">
      <p class="mb-2">Contact Information:</p>
      <p class="mb-2">Phone: 123-456-7890</p>
      <p class="mb-2">Email: info@foodandbeverage.com</p>
      <p class="mb-2">Address: 123 Main St, Anytown, USA</p>
    </div>
  </footer>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>