<template>
  <div class="flex flex-col min-h-screen bg-gray-100 font-sans leading-normal tracking-normal">
    <header class="bg-white">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="#" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src="https://static.photos/fashion/300x300/119.webp" alt="Logo" class="w-20 h-20">
          <span class="ml-3 text-xl">Fashion Brand</span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="#" class="mr-5 hover:text-gray-900">Home</a>
          <a href="#" class="mr-5 hover:text-gray-900">Shop</a>
          <a href="#" class="mr-5 hover:text-gray-900">About</a>
          <a href="#" class="mr-5 hover:text-gray-900">Contact</a>
        </nav>
      </div>
    </header>
    <main class="flex-grow">
      <div class="w-full bg-cover bg-center h-96" style="background-image: url('https://static.photos/fashion/1600x900/118.webp')">
        <div class="flex items-center px-6 py-32 md:px-12 text-center md:text-left">
          <div class="md:w-1/2">
            <h1 class="text-4xl font-bold leading-tight mt-0 mb-2 text-white">Welcome to our fashion brand</h1>
            <p class="leading-normal text-white text-base mb-8">We are a fashion brand that offers high-quality, stylish clothing for all occasions. Our products are made from the finest materials and are designed to be comfortable and fashionable.</p>
            <button class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">Shop Now</button>
          </div>
        </div>
      </div>
    </main>
    <footer class="bg-white">
      <div class="container mx-auto px-8">
        <div class="w-full flex flex-col md:flex-row py-6">
          <div class="flex-1 mb-6">
            <a href="#" class="text-white no-underline hover:text-white font-bold text-2xl mt-8">Fashion Brand</a>
          </div>
          <div class="flex-1">
            <p class="uppercase text-gray-500 md:mb-6">Links</p>
            <ul class="list-reset mb-6">
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" class="no-underline hover:underline text-gray-800 hover:text-orange-500">Home</a>
              </li>
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" class="no-underline hover:underline text-gray-800 hover:text-orange-500">Shop</a>
              </li>
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" class="no-underline hover:underline text-gray-800 hover:text-orange-500">About</a>
              </li>
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" class="no-underline hover:underline text-gray-800 hover:text-orange-500">Contact</a>
              </li>
            </ul>
          </div>
          <div class="flex-1">
            <p class="uppercase text-gray-500 md:mb-6">Social</p>
            <ul class="list-reset mb-6">
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" class="no-underline hover:underline text-gray-800 hover:text-orange-500">Facebook</a>
              </li>
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" class="no-underline hover:underline text-gray-800 hover:text-orange-500">Twitter</a>
              </li>
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" class="no-underline hover:underline text-gray-800 hover:text-orange-500">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// No script needed for this basic template
</script>