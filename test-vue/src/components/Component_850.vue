<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">Travel Agency</span>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Home
        </a>
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Destinations
        </a>
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
          Travel Types
        </a>
      </div>
    </div>
  </nav>

  <div class="container mx-auto px-4 py-12">
    <h1 class="text-4xl text-center font-bold mb-8">Welcome to our Travel Agency</h1>
    <p class="text-lg text-center mb-8">
      We are a premier travel agency specializing in exotic destinations. Our team of experienced travel experts is dedicated to providing you with the best possible service. Whether you're looking for a relaxing beach vacation, an adventurous trek, or a cultural experience, we've got you covered.
    </p>
    <div class="flex justify-center">
      <button class="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
        Discover Trips
      </button>
    </div>
  </div>
</template>

<script setup>
// No script needed for this simple template
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>