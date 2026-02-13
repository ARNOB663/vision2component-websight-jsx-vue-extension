<template>
  <div class="relative">
    <video autoplay loop muted class="w-full h-full object-cover">
      <source src="https://picsum.photos/900/600?image=189" type="video/mp4">
    </video>
    <div class="absolute inset-0 flex items-center justify-center">
      <h1 class="text-5xl text-white">Welcome to our Travel Agency</h1>
    </div>
  </div>
  <div class="container mx-auto px-4 py-10">
    <div class="flex justify-center">
      <button class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
        Book Now
      </button>
    </div>
    <div class="grid grid-cols-3 gap-4 mt-10">
      <div v-for="(destination, index) in destinations" :key="index" class="bg-white rounded-lg shadow-lg p-4">
        <img :src="`https://picsum.photos/900/600?image=${destination.image}`" :alt="destination.name" class="w-full">
        <h2 class="text-xl font-bold mt-4">{{ destination.name }}</h2>
      </div>
    </div>
  </div>
  <footer class="bg-gray-800 text-white p-4">
    <div class="container mx-auto">
      <h2 class="text-xl font-bold">Travel Tips and FAQs</h2>
      <!-- Add your travel tips and FAQs here -->
    </div>
  </footer>
</template>

<script setup>
const destinations = [
  { name: 'Beach Destinations', image: '189' },
  // Add more destinations as needed
]
</script>