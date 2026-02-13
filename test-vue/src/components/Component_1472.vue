<template>
  <div class="bg-gray-100 font-sans leading-normal tracking-normal">
    <nav class="flex items-center justify-between flex-wrap bg-white p-6">
      <div class="flex items-center flex-no-shrink text-white mr-6">
        <span class="font-semibold text-xl tracking-tight">Health and Wellness</span>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Home
          </a>
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            About
          </a>
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </nav>

    <header class="bg-cover bg-center h-screen" :style="{ backgroundImage: 'url(https://static.photos/health/1600x900/73.webp)' }">
      <div class="container mx-auto px-6 md:flex md:items-center md:justify-between">
        <div class="text-center md:text-left">
          <h1 class="font-bold mt-0 text-4xl text-white leading-tight mb-2">Health and Wellness</h1>
          <p class="text-xl text-white leading-tight mb-8">
            At Health and Wellness, we believe in the power of nature to improve our health and wellbeing. We provide a wide range of services to help you achieve your health and wellness goals.
          </p>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
// No script needed for this basic template
</script>

<style scoped>
/* Add any custom styles here */
</style>