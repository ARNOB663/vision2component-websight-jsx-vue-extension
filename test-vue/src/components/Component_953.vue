<template>
  <header class="w-full h-64 bg-cover bg-center" :style="{ backgroundImage: 'url(https://static.photos/real-estate/1600x900/154.webp)' }">
    <div class="container mx-auto px-6 py-12">
      <h1 class="text-4xl font-bold text-white">Real Estate Listings</h1>
      <p class="text-2xl text-white">Find your dream home with us</p>
    </div>
  </header>

  <section class="container mx-auto px-6 py-12">
    <div class="flex flex-wrap -mx-2">
      <div class="w-full px-2">
        <div class="relative flex flex-col min-w-0 break-words bg-white border-2 rounded-lg shadow-lg">
          <div class="px-6 py-6 mb-0 bg-transparent border-0">
            <h2 class="text-2xl font-bold">Search for your dream home</h2>
            <form class="mt-6">
              <input type="text" placeholder="Search..." class="w-full px-4 py-3 mt-4 text-base leading-6 text-gray-700 transition-colors duration-200 transform bg-white border border-gray-300 rounded placeholder-gray-500 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-gray-100 focus:ring-red-400">
              <button type="submit" class="w-full px-4 py-3 mt-4 text-base font-bold text-white transition-all duration-200 transform bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:shadow-outline">Search</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="container mx-auto px-6 py-12">
    <div class="flex flex-wrap -mx-2">
      <!-- Add your listings here -->
    </div>
  </section>
</template>

<script setup>
// Your script logic here
</script>

<style scoped>
/* Your scoped styles here */
</style>