<template>
  <div class="w-full h-screen bg-cover bg-center" :style="{ backgroundImage: 'url(https://static.photos/travel/1600x900/8.webp)' }">
    <div class="flex items-center justify-center h-full">
      <div class="text-center">
        <h1 class="text-5xl text-white font-bold mb-4">Welcome to our Travel Agency</h1>
        <p class="text-xl text-white mb-8">We are a full-service travel agency specializing in creating unforgettable experiences for our clients.</p>
        <a href="#" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Book Now</a>
      </div>
    </div>
  </div>
  <div class="container mx-auto py-8">
    <h2 class="text-3xl text-center mb-8">Popular Destinations</h2>
    <div class="flex flex-wrap -mx-4">
      <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
        <img src="https://static.photos/travel/900x600/9.webp" alt="Paris" class="mb-4">
        <h3 class="text-xl mb-2">Paris</h3>
        <p class="text-gray-700">Experience the city of love with our Paris packages.</p>
      </div>
      <!-- Repeat the above div for each destination -->
    </div>
  </div>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Add any additional styles here */
</style>