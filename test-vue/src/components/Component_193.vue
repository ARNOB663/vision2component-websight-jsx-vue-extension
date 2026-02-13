<template>
  <div class="flex flex-col md:flex-row">
    <div class="w-full md:w-1/4 bg-red-500 text-white p-4">
      <h2 class="text-2xl">Menu</h2>
      <!-- Menu items go here -->
    </div>
    <div class="w-full md:w-3/4 p-4">
      <div class="bg-red-500 text-white p-4 mb-4">
        <h1 class="text-4xl">Welcome to our Food Truck</h1>
        <p class="text-xl">We offer a wide variety of delicious food made fresh daily. Come try our food and enjoy our friendly service.</p>
        <button class="bg-white text-red-500 p-2 mt-4">Order Now</button>
      </div>
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/2 p-4">
          <img src="https://picsum.photos/seed/193/900/600" alt="Food">
        </div>
        <div class="w-full md:w-1/2 p-4">
          <img src="https://picsum.photos/seed/193/900/600" alt="Food">
        </div>
        <!-- More food images go here -->
      </div>
      <div class="p-4">
        <h2 class="text-2xl">Testimonials</h2>
        <!-- Testimonials go here -->
      </div>
    </div>
  </div>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Tailwind CSS is included via CDN in the template */
</style>