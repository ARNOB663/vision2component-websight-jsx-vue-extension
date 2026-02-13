<template>
  <div class="bg-gray-100 font-sans leading-normal tracking-normal">
    <!-- Navigation -->
    <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-xl tracking-tight">Advertising Agency</span>
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

    <!-- Full-screen video background -->
    <div class="relative">
      <video autoplay muted loop class="w-full">
        <source src="https://static.photos/business/900x600/192.webp" type="video/mp4">
      </video>
      <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
    </div>

    <!-- Featured projects section -->
    <section class="py-8">
      <h2 class="text-3xl text-center font-bold mb-8">Featured Projects</h2>
      <!-- Add your projects here -->
    </section>

    <!-- Call-to-action section -->
    <section class="py-8 bg-teal-500 text-white text-center">
      <h2 class="text-3xl font-bold mb-4">Ready to get started?</h2>
      <p class="text-lg mb-8">Contact us today to learn more about our services.</p>
      <a href="#responsive-header" class="inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Contact Us</a>
    </section>
  </div>
</template>

<script setup>
// Your script logic here if needed
</script>

<style scoped>
/* Your scoped styles here */
</style>