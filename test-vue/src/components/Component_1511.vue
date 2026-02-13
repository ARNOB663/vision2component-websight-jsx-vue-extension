<template>
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

  <div class="w-full p-6 flex flex-col flex-grow items-center justify-center">
    <img class="w-full" src="https://static.photos/business/900x600/113.webp" alt="Hero Image">
  </div>

  <div class="container mx-auto px-4">
    <p class="my-8 text-lg text-center">
      At Tech Company, we are dedicated to providing the best technology solutions for our clients. Our team of experts is committed to delivering high-quality, reliable, and innovative products and services. We are passionate about technology and are always looking for new ways to improve and innovate.
    </p>
  </div>

  <footer class="bg-white">
    <div class="container mx-auto px-8">
      <div class="w-full flex flex-col md:flex-row py-6">
        <div class="flex-1 mb-6">
          <a href="#" class="text-teal-500 no-underline hover:text-teal-darker hover:underline text-2xl lg:text-teal-darker">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="#" class="text-teal-500 no-underline hover:text-teal-darker hover:underline text-2xl lg:text-teal-darker">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="text-teal-500 no-underline hover:text-teal-darker hover:underline text-2xl lg:text-teal-darker">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
        <div class="flex-1">
          <p class="uppercase text-gray-500 md:mb-6">Contact</p>
          <p class="mb-2">123 Main Street</p>
          <p class="mb-2">Anytown, USA 12345</p>
          <p class="mb-2">(123) 456-7890</p>
          <p class="mb-2">info@techcompany.com</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No script needed for this example
</script>