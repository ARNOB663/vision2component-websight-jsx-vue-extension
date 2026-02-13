<template>
  <div class="flex items-center justify-center h-screen bg-cover bg-center" :style="{ backgroundImage: 'url(https://static.photos/art/1600x900/85.webp)' }">
    <div class="text-center text-white">
      <h1 class="text-5xl">Welcome to Our Food Delivery Service</h1>
      <p class="text-2xl my-4">We offer the best food delivery service in town. Our experienced chefs prepare delicious meals using only the freshest ingredients.</p>
      <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        Order Now
      </button>
    </div>
  </div>
  <footer class="bg-gray-800 text-center text-white py-4">
    <p>Location: 123 Main St, Anytown, USA</p>
    <p>Delivery Hours: Monday - Friday, 11am - 10pm</p>
  </footer>
</template>

<script setup>
// No script needed for this simple example
</script>