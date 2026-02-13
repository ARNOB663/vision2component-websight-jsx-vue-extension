<template>
  <div class="bg-gray-100 font-sans leading-normal tracking-normal">
    <header class="bg-white text-center">
      <img src="https://static.photos/business/300x300/125.webp" alt="Logo" class="w-1/4 mx-auto my-4">
      <nav class="container mx-auto flex items-center justify-between flex-wrap p-6">
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
            <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Sign Up</a>
          </div>
        </div>
      </nav>
    </header>
    <main>
      <section class="bg-cover bg-center h-screen" style="background-image: url('https://static.photos/business/1600x900/124.webp')">
        <div class="container mx-auto px-6 md:flex md:items-center">
          <div class="text-center md:text-left">
            <h1 class="text-5xl font-bold leading-tight mt-0 mb-2 text-white">Healthy Food Company</h1>
            <p class="text-2xl text-white">We provide the best healthy food options for you to enjoy.</p>
            <button class="bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow">Order Now</button>
          </div>
        </div>
      </section>
    </main>
    <footer class="bg-white">
      <div class="container mx-auto px-8">
        <div class="w-full flex flex-col md:flex-row py-6">
          <div class="flex-1 mb-6">
            <a href="#" class="text-orange-600 no-underline hover:underline font-bold text-xl mt-2">Healthy Food Company</a>
            <p class="text-gray-600">123 Main Street, Anytown, USA</p>
            <p class="text-gray-600">Phone: (123) 456-7890</p>
            <p class="text-gray-600">Email: info@healthyfoodcompany.com</p>
          </div>
          <div class="flex-1">
            <p class="uppercase text-gray-500 md:mb-6">Social</p>
            <ul>
              <li class="mt-2"><a href="#" class="text-gray-600 hover:text-orange-600">Facebook</a></li>
              <li class="mt-2"><a href="#" class="text-gray-600 hover:text-orange-600">Twitter</a></li>
              <li class="mt-2"><a href="#" class="text-gray-600 hover:text-orange-600">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// No script needed for this example
</script>