<template>
  <header class="bg-cover bg-center h-screen" :style="{ backgroundImage: 'url(https://picsum.photos/seed/202/1600/900)' }">
    <div class="container mx-auto px-6 md:flex md:items-center md:justify-between py-4">
      <div class="text-center text-white">
        <h1 class="font-bold uppercase text-5xl pt-20 md:pt-0">Health and Wellness</h1>
        <p class="text-2xl pt-2">A journey to better health starts here.</p>
      </div>
      <nav class="flex items-center justify-between flex-wrap pt-4 md:pt-0">
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <a href="#services" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Services
            </a>
            <a href="#products" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Products
            </a>
            <a href="#resources" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
              Resources
            </a>
          </div>
          <button class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Get Started</button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
// Your script setup logic can go here if needed
</script>

<style scoped>
/* Any scoped styles can go here */
</style>