<template>
  <div class="bg-fixed bg-center bg-cover h-screen" :style="{ backgroundImage: 'url(\'https://static.photos/business/1600x900/36.webp\')' }">
    <nav class="flex items-center justify-between flex-wrap bg-white p-6">
      <div class="flex items-center flex-no-shrink text-white mr-6">
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
    <div class="h-screen flex items-center justify-center">
      <div class="text-center">
        <h1 class="text-4xl lg:text-5xl mb-6">Welcome to Tech Company</h1>
        <p class="text-xl lg:text-2xl mb-6">We are a leading provider of cutting-edge technology solutions. Our team of experts is dedicated to delivering the best possible products and services to our clients.</p>
        <button class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
          Learn More
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// No script needed for this simple template
</script>