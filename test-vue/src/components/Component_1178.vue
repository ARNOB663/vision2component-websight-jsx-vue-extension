<template>
  <header class="relative">
    <div class="flex overflow-x-auto">
      <div class="w-full p-4">
        <img src="https://static.photos/real-estate/900x600/180.webp" alt="House" class="w-full">
        <p class="text-center">This is a beautiful house.</p>
        <button class="block mx-auto mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          View Details
        </button>
      </div>
      <!-- Add more slides here -->
    </div>
  </header>

  <div class="flex justify-center mt-8">
    <img src="https://static.photos/real-estate/300x300/181.webp" alt="Logo" class="h-16">
  </div>

  <main class="container mx-auto mt-8">
    <div class="flex flex-wrap -mx-4">
      <div class="w-full md:w-1/3 p-4">
        <img src="https://static.photos/real-estate/900x600/182.webp" alt="Apartment" class="w-full">
      </div>
      <div class="w-full md:w-2/3 p-4">
        <h2 class="text-xl font-bold mb-2">Apartment for Sale</h2>
        <p class="mb-4">This is a spacious apartment with 3 bedrooms and 2 bathrooms. It's perfect for a family.</p>
        <p class="font-bold">$500,000</p>
      </div>
      <!-- Add more properties here -->
    </div>
  </main>
</template>

<script setup>
// No script needed for this simple example
</script>