<template>
  <header class="bg-cover bg-center h-screen" :style="{ backgroundImage: 'url(https://static.photos/travel/1600x900/68.webp)' }">
    <div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center h-full">
      <div class="text-center">
        <h1 class="text-5xl font-bold text-white leading-tight mt-0 mb-2">Welcome to our Travel Agency</h1>
        <p class="text-2xl text-white">Discover the world with us</p>
      </div>
    </div>
  </header>

  <main class="container mx-auto px-6 md:px-12 py-12">
    <section class="mb-12">
      <h2 class="text-4xl font-bold text-center mb-6">Our Popular Destinations</h2>
      <!-- Add your destinations here -->
    </section>

    <section class="mb-12">
      <h2 class="text-4xl font-bold text-center mb-6">Travel Deals and Services</h2>
      <!-- Add your deals and services here -->
    </section>
  </main>

  <footer class="bg-gray-800 text-white text-center py-8">
    <div class="container mx-auto px-6 md:px-12">
      <p class="mb-2">&copy; 2022 Travel Agency. All rights reserved.</p>
      <nav>
        <ul class="flex justify-center">
          <li class="mx-2"><a href="#" class="text-white hover:text-gray-300">Terms and Conditions</a></li>
          <li class="mx-2"><a href="#" class="text-white hover:text-gray-300">Travel Insurance</a></li>
          <li class="mx-2"><a href="#" class="text-white hover:text-gray-300">Customer Support</a></li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script setup>
// Your script setup logic here
</script>

<style scoped>
/* Your scoped styles here */
</style>