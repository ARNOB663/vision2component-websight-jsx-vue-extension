<template>
  <div class="bg-gray-100 font-sans leading-normal tracking-normal">
    <header class="bg-white text-gray-800 py-4">
      <nav class="container mx-auto flex items-center justify-between flex-wrap">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <span class="font-semibold text-xl tracking-tight">Travel Agency</span>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Home
            </a>
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Destinations
            </a>
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
    <main class="container mx-auto px-4 py-8">
      <section class="flex flex-col items-center justify-center text-center h-screen bg-cover bg-center" style="background-image: url('https://via.placeholder.com/1920x1080');">
        <h1 class="text-5xl font-bold text-white">Welcome to our travel agency</h1>
        <p class="text-xl text-white mt-4">We offer a wide range of travel packages to exotic destinations around the world.</p>
        <div class="mt-8">
          <a href="#responsive-header" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Book Now
          </a>
          <a href="#responsive-header" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ml-4">
            Explore Destinations
          </a>
        </div>
      </section>
    </main>
    <footer class="bg-gray-800 text-white py-4">
      <div class="container mx-auto flex items-center justify-between flex-wrap">
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <p class="text-teal-200">Contact us: info@travelagency.com</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// No script needed for this example
</script>