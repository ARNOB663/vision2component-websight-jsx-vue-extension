<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">Travel Agency</span>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Destinations
        </a>
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Offers
        </a>
      </div>
    </div>
  </nav>

  <header class="w-full py-16 bg-center bg-cover" :style="{ backgroundImage: 'url(\'https://static.photos/mountain/1600x900/75.webp\')' }">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-4xl font-bold text-white leading-tight">
        Discover the world with us
      </h2>
      <p class="text-xl text-white my-4">
        We offer a wide range of travel packages to suit every taste and budget. From luxury vacations to budget-friendly getaways, we have something for everyone.
      </p>
      <button class="mx-auto mt-4 lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">
        Book Now
      </button>
    </div>
  </header>
</template>

<script setup>
// No script needed for this simple example
</script>