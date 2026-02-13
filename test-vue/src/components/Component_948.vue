<template>
  <header class="bg-cover bg-center h-screen" :style="{ backgroundImage: 'url(https://static.photos/travel/1600x900/149.webp)' }">
    <div class="container mx-auto px-6 md:flex md:items-center md:justify-between py-4">
      <div class="text-center text-white">
        <h1 class="font-bold uppercase text-5xl pt-20 md:pt-0">Welcome to our travel agency</h1>
        <p class="text-2xl">We offer the best travel packages and deals around the world</p>
      </div>
    </div>
  </header>

  <main class="container mx-auto px-6 py-8">
    <div class="flex flex-wrap">
      <div class="w-full md:w-2/3 p-6">
        <h2 class="text-4xl font-bold text-gray-800 leading-none mb-6">Popular travel packages</h2>
        <!-- CTA for popular travel packages and deals -->
      </div>

      <div class="w-full md:w-1/3 p-6">
        <h2 class="text-4xl font-bold text-gray-800 leading-none mb-6">Testimonials</h2>
        <!-- Traveler testimonials -->

        <h2 class="text-4xl font-bold text-gray-800 leading-none mb-6 mt-12">Map of the world</h2>
        <!-- Map of the world with clickable locations -->
      </div>
    </div>
  </main>

  <footer class="bg-gray-800 text-white text-center py-8">
    <p>© 2022 Travel Agency. All rights reserved.</p>
  </footer>
</template>

<script setup>
// Your script logic here if needed
</script>

<style scoped>
/* Add any scoped styles here */
</style>