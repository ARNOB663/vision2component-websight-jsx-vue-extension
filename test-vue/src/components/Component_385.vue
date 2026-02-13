<template>
  <header class="bg-indigo-500 text-white text-center py-12">
    <h1 class="text-4xl">Welcome to our Travel Agency</h1>
    <p class="mt-4 text-xl">Experience the world with us. We offer a wide range of travel packages to exotic destinations.</p>
    <button class="mt-8 bg-white text-indigo-500 hover:bg-indigo-600 text-lg py-2 px-8 rounded">Book Now</button>
  </header>
  <section class="py-12">
    <h2 class="text-3xl text-center mb-8">Popular Destinations</h2>
    <div class="flex flex-wrap justify-center">
      <div class="w-full md:w-1/2 lg:w-1/3 p-4">
        <img src="https://picsum.photos/seed/385/900/600" alt="Beach" class="w-full rounded">
        <h3 class="text-2xl mt-4">Beach Destinations</h3>
      </div>
      <div class="w-full md:w-1/2 lg:w-1/3 p-4">
        <img src="https://picsum.photos/seed/385/900/600" alt="Mountain" class="w-full rounded">
        <h3 class="text-2xl mt-4">Mountain Destinations</h3>
      </div>
      <div class="w-full md:w-1/2 lg:w-1/3 p-4">
        <img src="https://picsum.photos/seed/385/900/600" alt="City" class="w-full rounded">
        <h3 class="text-2xl mt-4">City Destinations</h3>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script needed for this example
</script>