<template>
  <header class="flex items-center justify-center bg-white p-4">
    <img src="https://static.photos/art/300x300/194.webp" alt="Logo" class="h-16">
  </header>
  <nav class="sticky top-0 bg-white p-4">
    <ul class="flex justify-center space-x-4">
      <li><a href="#" class="text-blue-500 hover:text-blue-700">Order</a></li>
      <li><a href="#" class="text-blue-500 hover:text-blue-700">Delivery</a></li>
    </ul>
  </nav>
  <main class="p-4">
    <section class="mb-4">
      <img src="https://static.photos/art/900x600/195.webp" alt="Hero Image" class="w-full">
      <h1 class="text-2xl font-bold mb-2">Welcome to our Food Delivery Service</h1>
      <p class="text-gray-700">We offer a wide variety of delicious meals, prepared fresh daily by our expert chefs. Our mission is to bring the joy of cooking to your doorstep.</p>
    </section>
    <section>
      <h2 class="text-xl font-bold mb-2">Popular Dishes</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div class="bg-white p-4">
          <img src="https://static.photos/art/900x600/196.webp" alt="Pizza" class="w-full">
          <h3 class="text-lg font-bold mb-2">Pizza</h3>
          <p class="text-gray-700">A delicious pizza made with fresh ingredients.</p>
        </div>
        <!-- Add more dishes here -->
      </div>
    </section>
  </main>
</template>

<script setup>
// Your script logic can go here if needed
</script>

<style scoped>
/* Your scoped styles can go here */
</style>