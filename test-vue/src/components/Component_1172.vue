<template>
  <div class="bg-gray-100">
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold text-center text-gray-800">Welcome to our Travel Agency</h1>
      <p class="text-lg text-center text-gray-600 mt-4">
        We are a premier travel agency specializing in providing unforgettable travel experiences to our clients. Our team of experienced travel agents are dedicated to helping you plan your dream vacation. Whether you're looking for a relaxing beach getaway, an adventurous trek, or a cultural immersion, we've got you covered.
      </p>

      <!-- Full-width banner image -->
      <div class="mt-8">
        <img src="https://static.photos/travel/900x600/174.webp" alt="Banner Image" class="w-full h-auto">
      </div>

      <!-- Search bar -->
      <div class="mt-8">
        <input type="text" placeholder="Search Destinations..." class="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
      </div>

      <!-- Two-column layout for destinations and packages -->
      <div class="flex flex-wrap mt-8">
        <div class="w-full md:w-1/2 lg:w-1/3 p-4">
          <div class="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="https://static.photos/travel/900x600/175.webp" alt="Destination 1" class="w-full h-auto">
            <div class="px-4 py-2">
              <h2 class="text-xl font-semibold text-gray-800">Destination 1</h2>
              <p class="text-gray-600">Description of Destination 1.</p>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 p-4">
          <div class="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="https://static.photos/travel/900x600/176.webp" alt="Package 1" class="w-full h-auto">
            <div class="px-4 py-2">
              <h2 class="text-xl font-semibold text-gray-800">Package 1</h2>
              <p class="text-gray-600">Description of Package 1.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Sidebar for special deals, ratings, and awards -->
      <div class="flex flex-wrap mt-8">
        <div class="w-full md:w-1/2 lg:w-1/3 p-4">
          <div class="bg-white shadow-md rounded-lg overflow-hidden">
            <h2 class="text-xl font-semibold text-gray-800 mb-4">Special Deals</h2>
            <ul class="list-disc pl-4">
              <li>Deal 1</li>
              <li>Deal 2</li>
              <li>Deal 3</li>
            </ul>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 p-4">
          <div class="bg-white shadow-md rounded-lg overflow-hidden">
            <h2 class="text-xl font-semibold text-gray-800 mb-4">Ratings & Awards</h2>
            <ul class="list-disc pl-4">
              <li>Rating 1</li>
              <li>Award 1</li>
              <li>Award 2</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Your script logic here if needed
</script>

<style scoped>
/* Your scoped styles here */
</style>