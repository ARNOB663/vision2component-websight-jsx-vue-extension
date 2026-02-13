<template>
  <header class="w-full h-64 bg-center bg-cover" :style="{ backgroundImage: 'url(https://static.photos/technology/1600x900/147.webp)' }">
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
  </header>
  <main class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-4">Welcome to Tech Company</h1>
    <p class="mb-4">
      At Tech Company, we are dedicated to providing the best in technology solutions. Our mission is to empower businesses and individuals with the tools they need to succeed in the digital age. We believe in the power of technology to transform the way we live, work, and play.
    </p>
    <!-- Add more sections as needed -->
  </main>
</template>

<script setup>
// No script setup needed for this example
</script>

<style scoped>
/* Add any scoped styles here if needed */
</style>