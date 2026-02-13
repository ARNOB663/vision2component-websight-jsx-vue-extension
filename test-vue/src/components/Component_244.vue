<template>
  <nav class="fixed w-full bg-white shadow-md">
    <div class="container mx-auto flex items-center justify-between p-4">
      <div class="flex items-center">
        <img src="https://picsum.photos/seed/244/300/300" alt="Logo" class="h-10 w-10">
      </div>
      <div class="flex items-center">
        <a href="#" class="px-2 py-1 text-gray-700 hover:text-red-500">Home</a>
        <a href="#" class="px-2 py-1 text-gray-700 hover:text-red-500">About</a>
        <a href="#" class="px-2 py-1 text-gray-700 hover:text-red-500">Services</a>
        <a href="#" class="px-2 py-1 text-gray-700 hover:text-red-500">Contact</a>
      </div>
    </div>
  </nav>

  <main class="container mx-auto p-4">
    <h1 class="text-3xl font-bold text-center my-8">Welcome to Our Marketing Agency</h1>
    <p class="text-lg text-center my-8">
      We are a full-service digital marketing agency that specializes in creating and executing effective marketing strategies. 
      Our team of experts is dedicated to helping businesses of all sizes achieve their marketing goals. 
      Whether you're looking to increase brand awareness, drive more traffic to your website, or generate more leads, 
      we have the tools and strategies to help you succeed.
    </p>
    <div class="flex justify-center my-8">
      <a href="#" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Get Started
      </a>
    </div>
  </main>

  <footer class="bg-gray-800 text-white p-4">
    <div class="container mx-auto flex justify-between">
      <div>
        <p>© 2022 Marketing Agency</p>
      </div>
      <div>
        <a href="#" class="text-gray-400 hover:text-white">Case Studies</a>
        <a href="#" class="text-gray-400 hover:text-white">Testimonials</a>
        <a href="#" class="text-gray-400 hover:text-white">Contact</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No script needed for this example
</script>