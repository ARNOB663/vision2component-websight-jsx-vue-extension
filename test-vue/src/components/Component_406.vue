<template>
  <div class="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover" :style="{ backgroundImage: 'url(\'https://static.photos/food/1600x900/7.webp\')' }">
    <nav class="flex items-center justify-between flex-wrap p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-xl tracking-tight">Health Food Website</span>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Home
          </a>
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Recipes
          </a>
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            Health Tips
          </a>
        </div>
      </div>
    </nav>
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-1/2">
          <h1 class="text-4xl text-white font-bold leading-none mt-12">Welcome to our Health Food Website</h1>
          <p class="text-2xl text-white mt-6">We provide healthy and delicious recipes.</p>
        </div>
        <div class="w-full lg:w-1/2">
          <img src="https://static.photos/food/900x600/8.webp" alt="Fruit" class="mt-12">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No script needed for this simple template
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>