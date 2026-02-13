<template>
  <div class="flex flex-col min-h-screen bg-gray-100 font-sans leading-normal tracking-normal">
    <header class="bg-white">
      <nav class="flex items-center justify-between flex-wrap p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <span class="font-semibold text-xl tracking-tight">Bakery</span>
        </div>
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
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
    </header>
    <main class="flex-1">
      <div class="container mx-auto px-4 py-8">
        <h1 class="text-3xl font-bold mb-4">Welcome to our bakery</h1>
        <p class="mb-4">
          At our bakery, we believe in the power of food to bring people together. We use only the finest ingredients to create delicious, handcrafted baked goods that are sure to satisfy your sweet tooth. Whether you're looking for a sweet treat for your next gathering or a special gift for a loved one, we've got you covered.
        </p>
        <p class="mb-4">
          Our bakery is not just about food, it's about community. We believe that food is a powerful medium that can bring people together, and we strive to create a warm and inviting environment where everyone feels welcome.
        </p>
        <p class="mb-4">
          We are proud to offer a wide variety of baked goods, from cakes and pastries to breads and cookies. We also offer a variety of coffee and tea, as well as a selection of savory snacks.
        </p>
      </div>
    </main>
    <footer class="bg-white">
      <div class="container mx-auto px-4 py-8">
        <p class="text-sm">
          &copy; 2022 Bakery. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Your script setup logic here
</script>

<style scoped>
/* Your scoped styles here */
</style>