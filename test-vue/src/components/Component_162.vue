<template>
  <div class="bg-cover bg-center h-screen" :style="{ backgroundImage: 'url(https://picsum.photos/seed/162/1600/900)' }">
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
        <div>
          <a href="#responsive-header" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Get Started</a>
        </div>
      </div>
    </nav>
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-1/2 p-4">
          <h2 class="text-3xl font-bold">Welcome to Tech Company</h2>
          <p class="text-gray-700 leading-normal">
            At Tech Company, we are dedicated to providing the best technology solutions for our clients. Our team of experts is committed to delivering high-quality, reliable, and innovative products and services. We are passionate about technology and are always looking for ways to improve and innovate.
          </p>
        </div>
        <div class="w-full lg:w-1/2 p-4">
          <h2 class="text-3xl font-bold">Our Mission</h2>
          <p class="text-gray-700 leading-normal">
            Our mission is to empower businesses and individuals with the tools they need to succeed in the digital world. We believe that technology should be accessible to everyone, and we are committed to making that a reality. We strive to create a world where technology is not just a luxury, but a necessity.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No script needed for this example
</script>