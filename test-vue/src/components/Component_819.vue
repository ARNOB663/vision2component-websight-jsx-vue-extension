<template>
  <div class="bg-indigo-100 font-sans leading-normal tracking-normal">
    <nav class="flex items-center justify-between flex-wrap bg-green-800 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-xl tracking-tight">Travel Agency</span>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Destinations
          </a>
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Travel Deals
          </a>
        </div>
      </div>
    </nav>

    <div class="w-full bg-cover bg-center h-96" :style="{ backgroundImage: 'url(https://static.photos/travel/1600x900/20.webp)' }">
      <div class="w-full text-center pt-12">
        <h1 class="text-4xl text-white">Welcome to our travel agency</h1>
        <p class="text-xl text-white">We offer a wide range of travel deals and destinations.</p>
      </div>
    </div>

    <div class="container mx-auto px-4 py-12">
      <h2 class="text-3xl text-center font-bold mb-6">Our Destinations</h2>
      <!-- Add your destinations here -->

      <h2 class="text-3xl text-center font-bold mb-6 mt-12">Our Travel Deals</h2>
      <!-- Add your travel deals here -->
    </div>
  </div>
</template>

<script setup>
// Your script logic here
</script>

<style scoped>
/* Your scoped styles here */
</style>