<template>
  <header class="bg-white p-4 flex justify-between items-center">
    <img src="https://static.photos/fashion/300x300/13.webp" alt="Logo" class="h-10">
    <nav>
      <ul class="flex space-x-4">
        <li><a href="#" class="text-gray-600 hover:text-gray-900">Home</a></li>
        <li><a href="#" class="text-gray-600 hover:text-gray-900">Shop</a></li>
        <li><a href="#" class="text-gray-600 hover:text-gray-900">About</a></li>
        <li><a href="#" class="text-gray-600 hover:text-gray-900">Contact</a></li>
      </ul>
    </nav>
    <a href="#"><img src="https://static.photos/fashion/900x600/14.webp" alt="Shopping Cart" class="h-10"></a>
  </header>
  <main>
    <section class="relative">
      <img src="https://static.photos/fashion/900x600/15.webp" alt="Homepage Image" class="w-full">
      <div class="absolute inset-0 flex items-center justify-center">
        <h1 class="text-white text-4xl font-bold">Welcome to our fashion brand</h1>
      </div>
    </section>
    <section class="flex justify-around my-8">
      <div>
        <img src="https://static.photos/fashion/900x600/16.webp" alt="Jeans" class="h-32 mx-auto">
        <h2 class="text-center text-xl mt-4">Jeans</h2>
      </div>
      <div>
        <img src="https://static.photos/fashion/900x600/17.webp" alt="Shoes" class="h-32 mx-auto">
        <h2 class="text-center text-xl mt-4">Shoes</h2>
      </div>
      <div>
        <img src="https://static.photos/fashion/900x600/18.webp" alt="Accessories" class="h-32 mx-auto">
        <h2 class="text-center text-xl mt-4">Accessories</h2>
      </div>
    </section>
  </main>
</template>

<script setup>
// No script needed for this simple template
</script>