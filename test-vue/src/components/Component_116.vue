<template>
  <div class="flex flex-col min-h-screen bg-gray-100 font-sans leading-normal tracking-normal">
    <nav class="bg-white border-b border-gray-200">
      <div class="container flex items-center justify-between flex-wrap p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <span class="font-semibold text-xl tracking-tight">Art Supply Store</span>
        </div>
        <div class="block lg:hidden">
          <button id="nav-toggle" class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block">
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
      </div>
    </nav>
    <main class="flex-1">
      <div class="container mx-auto px-6 py-10">
        <div class="flex flex-wrap">
          <div class="w-full md:w-1/2">
            <h1 class="text-4xl font-bold mb-4">Welcome to our Art Supply Store</h1>
            <p class="text-lg mb-4">
              We are a one-stop shop for all your art supply needs. We offer a wide range of products from paints, brushes, to canvas and more. Our products are of the highest quality and are designed to meet the needs of both beginners and professionals.
            </p>
            <p class="text-lg mb-4">
              We are committed to providing our customers with the best service and support. We strive to make your experience with us as smooth and enjoyable as possible.
            </p>
          </div>
          <div class="w-full md:w-1/2">
            <img src="https://picsum.photos/seed/116/900/600" alt="Art Supply" class="w-full">
          </div>
        </div>
      </div>
    </main>
    <footer class="bg-white">
      <div class="container mx-auto px-6 py-4">
        <div class="text-center">
          <p class="text-gray-600">© 2022 Art Supply Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// No script needed for this example
</script>