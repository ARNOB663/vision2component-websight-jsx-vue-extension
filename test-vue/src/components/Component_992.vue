<template>
  <div class="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover" :style="{ backgroundImage: 'url(\'https://static.photos/technology/1600x900/193.webp\')' }">
    <header class="flex items-center justify-between flex-wrap p-6 bg-white">
      <div class="flex items-center flex-shrink-0 mr-6">
        <span class="font-semibold text-xl tracking-tight">Tech Startup</span>
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a href="#company" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Company
          </a>
          <a href="#careers" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Careers
          </a>
          <a href="#contact" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </header>
    <main class="flex flex-col items-center justify-center p-5">
      <h1 class="text-5xl text-white font-bold leading-none mb-3">Welcome to our Tech Startup</h1>
      <p class="text-2xl text-white">We are a team of passionate individuals who are dedicated to creating innovative and impactful technology solutions.</p>
    </main>
  </div>
</template>

<script setup>
// No script needed for this simple example
</script>