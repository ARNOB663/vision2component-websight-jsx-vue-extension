<template>
  <div class="relative bg-gray-100 min-h-screen">
    <div class="flex flex-col items-center justify-center h-screen">
      <h1 class="text-5xl font-bold text-white">Welcome to our Travel Agency</h1>
      <p class="text-xl text-white">Discover the world with us</p>
      <button class="mt-4 px-4 py-2 text-white bg-blue-500 rounded">Book Now</button>
    </div>
    <div class="absolute bottom-0 w-full">
      <!-- Slideshow images here -->
    </div>
  </div>

  <nav class="flex justify-center p-4 bg-white">
    <ul class="flex space-x-8">
      <li><a href="#" class="text-blue-500">Destinations</a></li>
      <li><a href="#" class="text-blue-500">Testimonials</a></li>
      <li><a href="#" class="text-blue-500">Policy</a></li>
    </ul>
  </nav>

  <footer class="p-4 mt-4 bg-white">
    <p class="text-center text-gray-500">© 2022 Travel Agency. All rights reserved.</p>
  </footer>
</template>

<script setup>
// Your script logic here if needed
</script>

<style scoped>
/* Add any scoped styles here */
</style>