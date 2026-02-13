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

  <div class="relative">
    <video class="w-full h-full object-cover" autoplay loop muted>
      <source src="https://picsum.photos/seed/107/900/600" type="video/mp4">
    </video>
    <div class="absolute inset-0 flex items-center justify-center">
      <h1 class="text-5xl text-white font-bold">Welcome to Tech Company</h1>
    </div>
  </div>

  <div class="container mx-auto px-4 py-8">
    <h2 class="text-3xl font-bold mb-4">About Us</h2>
    <p class="text-lg mb-4">
      At Tech Company, we are dedicated to providing innovative and high-quality products and services to our customers. Our mission is to make technology accessible and affordable for everyone. We believe in the power of technology to transform lives and businesses.
    </p>
    <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
      Learn More
    </button>
  </div>
</template>

<script setup>
// No script needed for this example
</script>