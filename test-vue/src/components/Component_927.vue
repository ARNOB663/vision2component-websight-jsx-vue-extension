<template>
  <header class="flex justify-center items-center h-24 bg-indigo-500 text-white">
    <h1 class="text-2xl">Travel Agency</h1>
  </header>

  <main class="container mx-auto p-4">
    <section v-for="(destination, index) in destinations" :key="index" class="flex flex-col md:flex-row items-center justify-around my-8">
      <div class="w-full md:w-1/2 p-4">
        <img :src="'https://picsum.photos/900/600'" :alt="destination.title" class="w-full">
      </div>
      <div class="w-full md:w-1/2 p-4">
        <h2 class="text-2xl mb-2">{{ destination.title }}</h2>
        <p class="mb-4">{{ destination.description }}</p>
        <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
          {{ destination.ctaText }}
        </button>
      </div>
    </section>
  </main>

  <footer class="bg-indigo-500 text-white text-center py-4">
    <p>© 2022 Travel Agency. All rights reserved.</p>
  </footer>
</template>

<script setup>
const destinations = [
  {
    image: 'https://picsum.photos/900/600',
    title: 'Beach Destinations',
    description: 'Experience the best beaches in the world. From sunny paradises to serene coves, our beach destinations offer a perfect escape from the hustle and bustle of city life.',
    ctaText: 'Learn More'
  },
  // Add more destinations as needed
]
</script>