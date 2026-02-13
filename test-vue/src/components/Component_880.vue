<template>
  <div class="bg-gray-100">
    <div class="container mx-auto px-4">
      <!-- Header -->
      <header class="py-4">
        <h1 class="text-3xl font-bold">Real Estate Agency</h1>
      </header>

      <!-- Slider -->
      <div class="relative w-full h-64 bg-cover bg-center" :style="{ backgroundImage: 'url(https://static.photos/real-estate/1600x900/81.webp)' }">
        <!-- Call to action buttons -->
        <div class="absolute inset-0 flex items-center justify-center">
          <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mr-4">Buy</button>
          <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">Rent</button>
        </div>
      </div>

      <!-- Listings -->
      <div class="py-8">
        <h2 class="text-2xl font-bold mb-4">Listings</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <!-- Listing -->
          <div class="bg-white p-4 rounded shadow">
            <img src="https://static.photos/real-estate/900x600/82.webp" alt="House" class="w-full h-48 object-cover mb-4">
            <h3 class="text-xl font-bold">House for Sale</h3>
            <p class="text-gray-700">This is a beautiful house for sale.</p>
          </div>

          <!-- More listings... -->
        </div>
      </div>

      <!-- Map -->
      <div class="py-8">
        <h2 class="text-2xl font-bold mb-4">Map</h2>
        <div class="w-full h-64 bg-cover bg-center" :style="{ backgroundImage: 'url(https://static.photos/real-estate/1600x900/81.webp)' }"></div>
      </div>

      <!-- Footer -->
      <footer class="py-4">
        <p class="text-gray-700">© 2022 Real Estate Agency</p>
      </footer>
    </div>
  </div>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>