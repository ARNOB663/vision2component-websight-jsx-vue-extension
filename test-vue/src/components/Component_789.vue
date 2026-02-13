<template>
  <nav class="flex items-center justify-between flex-wrap bg-gray-800 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">Architectural Firm</span>
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

  <header class="pt-24">
    <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
      <img src="https://static.photos/art/300x300/191.webp" alt="Architectural Firm Logo" class="w-1/2 mb-6 md:w-1/3 lg:w-1/4 mb-10 object-cover object-center rounded">
      <div class="flex flex-col w-full lg:w-2/3 justify-center items-start text-center lg:text-left">
        <p class="leading-normal text-gray-800 text-4xl mb-8">
          We are a minimalistic design with a monochrome color palette, an oversized logo at the top center, and a full-width photo slideshow showcasing their best projects.
        </p>
      </div>
    </div>
  </header>

  <footer class="bg-gray-800 text-white text-center py-8">
    <p>© 2022 Architectural Firm. All rights reserved.</p>
  </footer>
</template>

<script setup>
// No script needed for this simple template
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>