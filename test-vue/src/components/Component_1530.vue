<template>
  <header class="bg-cover bg-center h-96" :style="{ backgroundImage: 'url(https://static.photos/business/1600x900/131.webp)' }"></header>
  <main class="container mx-auto px-4 py-6">
    <h1 class="text-4xl text-center font-bold mb-6">Welcome to Our Food Company</h1>
    <p class="text-xl text-center mb-12">
      At Our Food Company, we believe in the power of food to bring people together. Our mission is to provide our customers with the best quality, fresh, and healthy food. We source our ingredients from local farms and markets to ensure the highest quality and taste.
    </p>
    <div class="flex justify-around mb-12">
      <div class="w-1/3 p-4">
        <img class="mb-4" src="https://static.photos/business/900x600/132.webp" alt="Salad">
        <h2 class="text-2xl font-bold mb-2">Salads</h2>
        <p>Our salads are made with the freshest ingredients and are perfect for a light lunch or dinner.</p>
      </div>
      <div class="w-1/3 p-4">
        <img class="mb-4" src="https://static.photos/business/900x600/133.webp" alt="Pizza">
        <h2 class="text-2xl font-bold mb-2">Pizzas</h2>
        <p>Our pizzas are made with the finest ingredients and are baked to perfection.</p>
      </div>
      <div class="w-1/3 p-4">
        <img class="mb-4" src="https://static.photos/business/900x600/134.webp" alt="Steak">
        <h2 class="text-2xl font-bold mb-2">Steaks</h2>
        <p>Our steaks are sourced from the finest cuts of beef and are cooked to perfection.</p>
      </div>
    </div>
  </main>
  <footer class="bg-gray-800 text-white text-center py-6">
    <img class="inline-block h-12 mr-2" src="https://static.photos/business/300x300/135.webp" alt="Logo">
    <p class="inline-block align-middle">© 2022 Our Food Company. All rights reserved.</p>
  </footer>
</template>

<script setup>
// No script needed for this simple template
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>