<template>
  <div class="bg-gray-100 font-sans leading-normal tracking-normal">
    <div class="container w-full md:max-w-3xl mx-auto pt-20">
      <div class="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
        <div class="font-sans font-bold break-normal text-gray-900 pt-6 pb-2 text-2xl mb-10 text-center">
          Welcome to Our Real Estate Company
        </div>
        <p class="text-base">
          At our real estate company, we are committed to providing our clients with the best possible service. We understand that buying or selling a home can be a significant decision, which is why we offer a wide range of properties to choose from. Whether you're looking for a cozy starter home, a spacious family home, or a luxurious estate, we have something for everyone.
        </p>
        <div class="pt-10 pb-10">
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="search" type="text" placeholder="Search for properties..." />
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="p-4 md:w-1/2 w-full">
            <div class="h-full border-2 border-gray-800 border-opacity-60 rounded-lg overflow-hidden" :style="{ backgroundImage: `url('https://static.photos/real-estate/900x600/73.webp')` }"></div>
          </div>
          <div class="p-4 md:w-1/2 w-full">
            <div class="h-full border-2 border-gray-800 border-opacity-60 rounded-lg overflow-hidden" :style="{ backgroundImage: `url('https://static.photos/real-estate/900x600/73.webp')` }"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Add any custom styles here */
</style>