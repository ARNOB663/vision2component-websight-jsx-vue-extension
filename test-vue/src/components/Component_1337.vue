<template>
  <header class="w-full">
    <img src="https://static.photos/real-estate/900x600/139.webp" alt="Real Estate Header Image" class="w-full">
  </header>

  <nav class="bg-green-500 text-white p-4">
    <ul class="flex space-x-4 justify-center">
      <li><a href="#">Home</a></li>
      <li><a href="#">Properties</a></li>
      <li><a href="#">FAQs</a></li>
      <li><a href="#">Seller Resources</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>

  <div class="container mx-auto p-4">
    <div class="flex justify-center">
      <input type="text" placeholder="Search properties..." class="border border-gray-300 p-2 rounded">
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-4">
      <!-- Property listings go here -->
    </div>
  </div>

  <footer class="bg-green-500 text-white p-4 text-center">
    <p>Real Estate Company is a leading provider of real estate services. We have a wide range of properties for sale and rental. Our team of experienced realtors is always ready to assist you in finding the perfect home or property. Contact us today for more information.</p>
    <ul class="flex space-x-4 justify-center pt-4">
      <li><a href="#">FAQs</a></li>
      <li><a href="#">Seller Resources</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </footer>
</template>

<script setup>
// Your script logic goes here
</script>

<style scoped>
/* Your scoped styles go here */
</style>