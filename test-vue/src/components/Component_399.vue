<template>
  <div class="bg-gray-100">
    <div class="w-full h-64 bg-cover bg-center" :style="{ backgroundImage: 'url(https://static.photos/technology/1600x900/200.webp)' }">
      <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <span class="font-semibold text-xl tracking-tight">Tech Company</span>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Home</a>
            <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">About</a>
            <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">Contact</a>
          </div>
        </div>
      </nav>
    </div>
    <div class="container mx-auto px-4 py-12">
      <div class="flex flex-wrap -mx-4">
        <div class="w-full md:w-1/3 px-4">
          <p class="text-gray-800">
            At Tech Company, we are dedicated to providing the best technology solutions for our clients. Our team of experts is committed to delivering high-quality, reliable, and innovative products and services. We are passionate about technology and are always looking for new ways to improve and innovate.
          </p>
        </div>
        <div class="w-full md:w-1/3 px-4">
          <p class="text-gray-800">
            Our mission is to empower businesses and individuals with the tools they need to succeed in the digital world. We believe that technology should be accessible to everyone, and we strive to make our products and services affordable and easy to use.
          </p>
        </div>
        <div class="w-full md:w-1/3 px-4">
          <p class="text-gray-800">
            We are committed to sustainability and ethical business practices. We believe in the power of technology to create a better world, and we are dedicated to using our skills and expertise to make a positive impact.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No script needed for this example
</script>