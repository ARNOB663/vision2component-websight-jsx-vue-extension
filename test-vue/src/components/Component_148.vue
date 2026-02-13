<template>
  <header class="bg-cover bg-center h-screen" :style="{ backgroundImage: 'url(https://picsum.photos/seed/148/1600/900)' }">
    <div class="container mx-auto px-6 md:flex md:items-center md:justify-between py-4">
      <div class="text-center text-white">
        <h1 class="font-bold uppercase text-5xl pt-20 md:text-6xl">Welcome to our Art Gallery</h1>
        <p class="text-2xl pt-2">Explore the world of art with us</p>
        <button class="bg-white text-gray-800 font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider">Book Now</button>
      </div>
    </div>
  </header>
  <section class="py-10">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-bold text-center">Featured Artists</h2>
      <!-- Add your featured artists here -->
    </div>
  </section>
  <footer class="bg-gray-800 text-white text-center py-8">
    <div class="container mx-auto px-6">
      <p>© 2022 Art Gallery. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Tailwind CSS is included via CDN in the template */
</style>