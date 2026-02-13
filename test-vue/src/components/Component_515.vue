<template>
  <div class="bg-cover bg-center h-screen" :style="{ backgroundImage: 'url(https://static.photos/architecture/1600x900/116.webp)' }">
    <nav class="flex items-center justify-between flex-wrap bg-white p-6">
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
    <div class="container mx-auto px-4 py-12">
      <h1 class="text-4xl font-bold mb-4">Welcome to our Architecture Firm</h1>
      <p class="text-lg mb-4">
        We are a full-service architecture firm specializing in residential, commercial, and institutional projects. Our team of experienced architects and designers work closely with our clients to create spaces that are functional, beautiful, and sustainable.
      </p>
      <h2 class="text-2xl font-bold mb-4">Our Services</h2>
      <p class="text-lg mb-4">
        We offer a wide range of services including concept design, detailed design, construction documents, and project management. We also provide turnkey construction services for our clients.
      </p>
    </div>
    <footer class="bg-white p-6">
      <div class="container mx-auto px-4">
        <p class="text-center text-gray-600">
          &copy; 2022 Architecture Firm. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>