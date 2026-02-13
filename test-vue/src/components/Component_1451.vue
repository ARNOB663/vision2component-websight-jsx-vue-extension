<template>
  <div class="bg-gray-100">
    <header class="bg-primary text-white text-center py-6">
      <img src="https://static.photos/business/900x600/53.webp" alt="Food Truck Header" class="w-full h-auto mb-4">
      <h1 class="text-4xl font-bold mb-2">Welcome to Our Food Truck Business</h1>
      <p class="text-lg text-justify mb-8">
        At our food truck business, we are passionate about bringing the best of the culinary world to your doorstep. Our menu is a fusion of global flavors, carefully curated to satisfy all tastes. We believe in the power of food to bring people together, and our mission is to make that happen.
      </p>
    </header>
    <nav class="bg-secondary text-white text-center py-4">
      <ul class="flex justify-around">
        <li><a href="#menu" class="hover:text-primary">Menu</a></li>
        <li><a href="#location" class="hover:text-primary">Location</a></li>
        <li><a href="#reviews" class="hover:text-primary">Customer Reviews</a></li>
      </ul>
    </nav>
    <main class="container mx-auto px-4 py-8">
      <section id="menu" class="grid grid-cols-3 gap-4">
        <div class="bg-white p-4 rounded shadow">
          <h2 class="text-2xl font-bold mb-4">Menu</h2>
          <p>Our menu features a variety of dishes, from classic favorites to our signature creations.</p>
        </div>
        <div class="bg-white p-4 rounded shadow">
          <h2 class="text-2xl font-bold mb-4">Location</h2>
          <p>We are located at the heart of the city, ready to serve you.</p>
        </div>
        <div class="bg-white p-4 rounded shadow">
          <h2 class="text-2xl font-bold mb-4">Customer Reviews</h2>
          <p>Our customers love our food and our service. Here are some of their reviews.</p>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
// Your script logic here
</script>

<style scoped>
/* Add any custom styles here */
</style>