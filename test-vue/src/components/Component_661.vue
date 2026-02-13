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

  <div class="w-full py-6 flex justify-center">
    <img class="h-64" src="https://static.photos/business/900x600/63.webp" alt="Hero Image">
  </div>

  <div class="container w-full md:max-w-3xl mx-auto pt-20">
    <div class="w-full px-4 text-xl text-gray-800 leading-normal" style="font-family:Georgia,serif">
      <p class="p-3">
        At Tech Company, we are dedicated to providing the best technology solutions for your business needs. Our team of experts is committed to delivering high-quality, reliable, and innovative products and services. We are passionate about technology and are always looking for ways to improve and innovate.
      </p>
    </div>
  </div>

  <footer class="bg-gray-800 text-center text-white py-8">
    <div class="container mx-auto px-4">
      <div class="w-full flex flex-col md:flex-row">
        <div class="flex-1">
          <p class="uppercase">Social Media</p>
          <a href="#" class="block text-lg mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Facebook</a>
          <a href="#" class="block text-lg mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Twitter</a>
          <a href="#" class="block text-lg mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">LinkedIn</a>
        </div>
        <div class="flex-1">
          <p class="uppercase">Contact</p>
          <p class="text-lg">123 Main St, Anytown, USA</p>
          <p class="text-lg">(123) 456-7890</p>
          <p class="text-lg">info@techcompany.com</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>