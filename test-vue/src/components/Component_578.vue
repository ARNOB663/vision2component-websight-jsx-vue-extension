<template>
  <div class="flex justify-between items-center p-4 bg-blue-500 text-white">
    <img src="https://static.photos/real-estate/300x300/180.webp" alt="Logo" class="h-10">
    <nav>
      <ul class="flex space-x-4">
        <li><a href="#" class="hover:underline">Home</a></li>
        <li><a href="#" class="hover:underline">About</a></li>
        <li><a href="#" class="hover:underline">Contact</a></li>
      </ul>
    </nav>
  </div>
  <div class="flex flex-col items-center justify-center h-screen bg-cover bg-center" style="background-image: url('https://static.photos/real-estate/1600x900/179.webp')">
    <h1 class="text-4xl font-bold mb-4 text-white">Welcome to Our Real Estate Company</h1>
    <p class="text-xl text-white mb-8">We are a leading real estate company specializing in finding your dream home. With our extensive network of properties, we guarantee to find the perfect match for you.</p>
    <div class="w-full max-w-xs">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="search">
            Search for a property
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="search" type="text" placeholder="Search...">
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Search
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Add any custom styles here */
</style>