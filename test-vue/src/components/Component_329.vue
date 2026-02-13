<template>
  <div class="bg-gray-100">
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-4">Welcome to our Real Estate Agency</h1>
      <p class="mb-8">
        At our Real Estate Agency, we are committed to providing our clients with the most comprehensive and personalized service. We understand that buying or selling a home is a significant decision, and we are here to help you every step of the way. Our team of experienced real estate professionals is dedicated to providing you with the information and tools you need to make informed decisions. Whether you're looking for your dream home, selling your current home, or investing in real estate, we're here to help.
      </p>
      <div class="flex justify-center mb-8">
        <input type="text" placeholder="Search for properties" class="px-4 py-2 rounded-l-lg">
        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-r-lg">Search</button>
      </div>
      <div class="flex flex-wrap">
        <div class="w-full lg:w-3/4">
          <!-- Grid of properties goes here -->
        </div>
        <div class="w-full lg:w-1/4">
          <!-- Sidebar with filters goes here -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Your script setup logic here
</script>

<style scoped>
/* Your scoped styles here */
</style>