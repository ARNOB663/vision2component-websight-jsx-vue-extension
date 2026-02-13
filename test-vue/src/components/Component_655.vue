<template>
  <header class="bg-cover bg-center h-screen" :style="{ backgroundImage: 'url(\'https://static.photos/art/1600x900/56.webp\')' }">
    <nav class="container mx-auto px-6 py-4">
      <ul class="flex items-center justify-between">
        <li><a href="#" class="text-white hover:text-green-800 no-underline">Home</a></li>
        <li><a href="#" class="text-white hover:text-green-800 no-underline">Popular Dishes</a></li>
        <li><a href="#" class="text-white hover:text-green-800 no-underline">Deals</a></li>
      </ul>
    </nav>
    <div class="container mx-auto px-6 flex flex-col items-center justify-center h-full">
      <h1 class="text-5xl font-bold text-white leading-tight text-center">Welcome to Our Food Delivery Service</h1>
      <p class="text-2xl text-white text-center">We offer the best food delivery service in town. Order now and experience the best meals from the best restaurants.</p>
      <a href="#" class="mt-8 px-8 py-4 bg-white text-green-800 hover:bg-green-800 hover:text-white no-underline rounded">Order Now</a>
    </div>
  </header>
  <footer class="bg-gray-800 text-white text-center p-10">
    <p>&copy; 2022 Food Delivery Service. All rights reserved.</p>
  </footer>
</template>

<script setup>
// No script needed for this simple template
</script>