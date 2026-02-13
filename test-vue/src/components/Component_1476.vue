<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">Tech Company</span>
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
  <div class="container mx-auto">
    <div class="flex flex-wrap py-6">
      <div class="w-full lg:w-1/2">
        <h1 class="text-4xl font-bold leading-none mt-6">Welcome to our tech company</h1>
        <p class="leading-normal mt-6">
          We are a leading provider of cutting-edge technology solutions. Our team of experts is dedicated to delivering innovative and efficient solutions to meet your business needs.
        </p>
      </div>
      <div class="w-full lg:w-1/2">
        <img class="w-full" src="https://static.photos/technology/900x600/78.webp" alt="Tech Image">
      </div>
    </div>
  </div>
</template>

<script setup>
// No script setup needed for this simple example
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>