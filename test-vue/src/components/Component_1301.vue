<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">Health Food Store</span>
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

  <header class="w-full bg-white flex items-center justify-center" style="height: 50vh;">
    <img src="https://static.photos/health/900x600/103.webp" alt="Fresh fruits and vegetables" class="w-full h-full object-cover">
  </header>

  <section class="text-center p-8">
    <h1 class="text-4xl mb-4">Welcome to Health Food Store</h1>
    <p class="text-lg mb-8">We are a health food store dedicated to providing you with the freshest and healthiest food options. Our products are carefully selected from local farms and trusted suppliers to ensure you get the best quality and taste.</p>
    <button class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
      Shop Now
    </button>
  </section>

  <footer class="bg-gray-800 text-white text-center p-8">
    <p>© 2022 Health Food Store. All rights reserved.</p>
  </footer>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>