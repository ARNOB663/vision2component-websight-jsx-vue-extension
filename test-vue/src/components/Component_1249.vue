<template>
  <div class="flex flex-col min-h-screen">
    <header class="bg-cover bg-center h-screen flex items-center justify-center text-center text-white" :style="{ backgroundImage: 'url(https://static.photos/travel/1600x900/50.webp)' }">
      <div class="container mx-auto">
        <h1 class="text-5xl font-bold">Welcome to our Travel Agency</h1>
        <p class="text-2xl">We are a premier travel agency specializing in creating unforgettable travel experiences for our clients.</p>
      </div>
    </header>
    <nav class="bg-white py-4">
      <div class="container mx-auto flex items-center justify-between">
        <a href="#" class="text-gray-800 text-xl font-bold">Travel Agency</a>
        <div class="hidden md:flex md:items-center md:justify-end md:flex-1 lg:w-auto">
          <a href="#destinations" class="mr-4 text-lg">Destinations</a>
          <a href="#deals" class="mr-4 text-lg">Deals</a>
          <a href="#tips" class="mr-4 text-lg">Travel Tips</a>
          <a href="#contact" class="text-lg">Contact Us</a>
        </div>
      </div>
    </nav>
    <main class="flex-grow">
      <!-- Add your sections here -->
    </main>
    <footer class="bg-gray-800 text-white text-center py-8">
      <p>&copy; 2022 Travel Agency. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
// Your script logic here
</script>

<style scoped>
/* Your scoped styles here */
</style>