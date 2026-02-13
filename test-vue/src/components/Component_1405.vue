<template>
  <nav class="flex items-center justify-between flex-wrap bg-gray-800 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">Architecture Firm</span>
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

  <div class="w-full bg-gray-800 p-10">
    <h1 class="text-4xl text-center text-white">Welcome to our Architecture Firm</h1>
    <p class="text-xl text-center text-white mt-10">
      We are a full-service architecture firm specializing in residential, commercial, and institutional design. Our team of experienced architects and designers work closely with our clients to create spaces that are functional, beautiful, and sustainable. We believe in the power of design to transform the world around us.
    </p>
  </div>

  <div class="w-full bg-gray-800 p-10">
    <h2 class="text-3xl text-center text-white">Our Projects</h2>
    <div class="flex flex-wrap justify-center mt-10">
      <div class="w-full lg:w-1/3 p-4">
        <img src="https://static.photos/architecture/900x600/7.webp" alt="Architecture Project" class="w-full">
      </div>
      <div class="w-full lg:w-1/3 p-4">
        <img src="https://static.photos/architecture/900x600/8.webp" alt="Design Project" class="w-full">
      </div>
      <div class="w-full lg:w-1/3 p-4">
        <img src="https://static.photos/architecture/900x600/9.webp" alt="Construction Project" class="w-full">
      </div>
    </div>
  </div>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>