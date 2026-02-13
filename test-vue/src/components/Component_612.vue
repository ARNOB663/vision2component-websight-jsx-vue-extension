<template>
  <header class="sticky top-0 z-50 bg-white">
    <nav class="container mx-auto flex items-center justify-between flex-wrap p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-xl tracking-tight">Tech Company</span>
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
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
  <main>
    <section class="py-20">
      <div class="container mx-auto flex flex-wrap">
        <div class="w-full px-4">
          <h1 class="text-4xl font-bold leading-tight text-gray-800">Welcome to Tech Company</h1>
          <p class="leading-normal text-2xl mt-4 mb-8 text-gray-600">
            At Tech Company, we are dedicated to providing innovative and reliable technology solutions to meet your business needs. Our team of experts is committed to delivering high-quality products and services that exceed your expectations.
          </p>
        </div>
      </div>
    </section>
  </main>
  <footer class="bg-white">
    <div class="container mx-auto px-8">
      <div class="w-full flex flex-col md:flex-row py-6">
        <div class="flex-1 mb-6">
          <a class="text-gray-500 no-underline hover:no-underline" href="#">
            <span class="text-gray-700 text-lg font-bold mb-2">Tech Company</span>
          </a>
          <p class="text-gray-500 text-sm">
            At Tech Company, we are dedicated to providing innovative and reliable technology solutions to meet your business needs.
          </p>
        </div>
        <div class="flex-1">
          <p class="uppercase text-gray-500 md:mb-6">Social</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2">
              <a href="#" class="text-gray-600 hover:text-gray-800">Facebook</a>
            </li>
            <li class="mt-2 inline-block mr-2">
              <a href="#" class="text-gray-600 hover:text-gray-800">Twitter</a>
            </li>
            <li class="mt-2 inline-block mr-2">
              <a href="#" class="text-gray-600 hover:text-gray-800">Instagram</a>
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <p class="uppercase text-gray-500 md:mb-6">Newsletter</p>
          <form>
            <div class="flex w-full">
              <input class="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your Email" type="email">
              <button class="flex-shrink-0 bg-purple-600 text-white text-base font-semibold py-2 px-4 rounded-lg" type="button">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Your script setup logic here
</script>

<style scoped>
/* Your scoped styles here */
</style>