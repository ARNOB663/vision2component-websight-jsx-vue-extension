<template>
  <header class="flex items-center justify-center p-4 bg-white">
    <img src="https://static.photos/animals/300x300/137.webp" alt="Logo" class="h-16">
  </header>

  <nav class="flex items-center justify-center p-4 bg-white">
    <ul class="flex space-x-4">
      <li><a href="#" class="text-green-500 hover:text-green-700">Home</a></li>
      <li><a href="#" class="text-green-500 hover:text-green-700">Products</a></li>
      <li><a href="#" class="text-green-500 hover:text-green-700">About</a></li>
      <li><a href="#" class="text-green-500 hover:text-green-700">Contact</a></li>
    </ul>
  </nav>

  <main class="container mx-auto p-4">
    <h1 class="text-4xl text-center">Welcome to our Retail Store</h1>
    <p class="text-xl text-center mt-4">We offer a wide range of products to meet your needs. From clothing and accessories to home goods and electronics, we have everything you need.</p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
      <div class="bg-white p-4 shadow hover:shadow-lg">
        <img src="https://static.photos/animals/900x600/138.webp" alt="Clothing" class="w-full h-48 object-cover">
        <h2 class="text-2xl mt-2">Clothing</h2>
        <p class="mt-2">Find the perfect clothing for every occasion.</p>
      </div>

      <div class="bg-white p-4 shadow hover:shadow-lg">
        <img src="https://static.photos/animals/900x600/139.webp" alt="Electronics" class="w-full h-48 object-cover">
        <h2 class="text-2xl mt-2">Electronics</h2>
        <p class="mt-2">Discover the latest technology.</p>
      </div>

      <div class="bg-white p-4 shadow hover:shadow-lg">
        <img src="https://static.photos/animals/900x600/140.webp" alt="Home Goods" class="w-full h-48 object-cover">
        <h2 class="text-2xl mt-2">Home Goods</h2>
        <p class="mt-2">Everything you need for your home.</p>
      </div>
    </div>
  </main>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>