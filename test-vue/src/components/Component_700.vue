<template>
  <div class="flex flex-col md:flex-row">
    <div class="w-full md:w-1/5 p-4">
      <nav class="flex flex-col">
        <a href="#" class="my-2 text-lg font-bold text-blue-500 hover:text-blue-700">Home</a>
        <a href="#" class="my-2 text-lg font-bold text-blue-500 hover:text-blue-700">Listings</a>
        <a href="#" class="my-2 text-lg font-bold text-blue-500 hover:text-blue-700">About Us</a>
        <a href="#" class="my-2 text-lg font-bold text-blue-500 hover:text-blue-700">Contact Us</a>
      </nav>
    </div>
    <div class="w-full md:w-4/5 p-4">
      <div class="flex flex-col items-center justify-center h-screen">
        <h1 class="text-4xl font-bold">Welcome to Our Real Estate Company</h1>
        <p class="text-xl text-center mt-4">We are a leading real estate company specializing in finding your dream home. With a team of experienced realtors on hand, we can help you find the perfect property.</p>
      </div>
      <div class="flex flex-wrap mt-8">
        <div class="w-full md:w-1/2 lg:w-1/3 p-4" v-for="(listing, index) in listings" :key="index">
          <img :src="'https://static.photos/real-estate/900x600/102.webp'" :alt="listing.title" class="w-full h-64 object-cover">
          <h2 class="text-2xl font-bold mt-2">{{ listing.title }}</h2>
          <p class="mt-2">{{ listing.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const listings = [
  {
    image: 'https://static.photos/real-estate/900x600/102.webp',
    title: 'Beautiful House',
    description: 'This is a beautiful house with a lot of space and a great location.'
  },
  // Add more listings as needed
]
</script>

<style scoped>
/* Add any additional styles here */
</style>