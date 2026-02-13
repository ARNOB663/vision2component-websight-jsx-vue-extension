<template>
  <header class="w-full">
    <img src="https://static.photos/travel/900x600/67.webp" alt="Travel Image" class="w-full">
    <div class="flex justify-center items-center flex-col h-64">
      <h1 class="text-4xl font-bold text-center mb-4">Welcome to our travel agency</h1>
      <p class="text-center mb-4">We are a full-service travel agency specializing in creating unforgettable travel experiences for our clients. Whether you're looking for a romantic getaway, a family vacation, or a business trip, we're here to help you plan your next adventure.</p>
      <button class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
        Book Now
      </button>
    </div>
  </header>

  <div class="flex justify-center mt-8">
    <input type="text" placeholder="Search destinations" class="border border-gray-400 p-2 rounded">
  </div>

  <div class="flex justify-between mt-8">
    <div class="w-1/4 bg-white p-4">
      <h2 class="text-2xl font-bold mb-4">Filters</h2>
      <!-- Add filters here -->
    </div>

    <div class="w-2/4 bg-white p-4">
      <h2 class="text-2xl font-bold mb-4">Destinations</h2>
      <!-- Add destinations here -->
    </div>

    <div class="w-1/4 bg-white p-4">
      <h2 class="text-2xl font-bold mb-4">Popular Packages</h2>
      <!-- Add popular packages here -->
    </div>
  </div>
</template>

<script setup>
// Your script logic here
</script>

<style scoped>
/* Your scoped styles here */
</style>