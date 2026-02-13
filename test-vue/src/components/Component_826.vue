<template>
  <div class="bg-gray-100">
    <header class="fixed top-0 w-full bg-white shadow-md">
      <div class="container mx-auto flex items-center justify-between px-4 py-2">
        <img src="https://picsum.photos/300" alt="Logo" class="h-8">
        <div class="flex items-center">
          <img src="https://picsum.photos/900" alt="Cart" class="h-6 mr-2">
          <span class="text-sm">Cart (0)</span>
        </div>
      </div>
    </header>

    <nav class="container mx-auto mt-16 px-4 py-2">
      <ul class="flex justify-center space-x-4">
        <li><a href="#" class="text-gray-600 hover:text-gray-900">Home</a></li>
        <li><a href="#" class="text-gray-600 hover:text-gray-900">Shop</a></li>
        <li><a href="#" class="text-gray-600 hover:text-gray-900">About</a></li>
        <li><a href="#" class="text-gray-600 hover:text-gray-900">Contact</a></li>
      </ul>
    </nav>

    <main class="container mx-auto mt-32 px-4">
      <div class="grid grid-cols-2 gap-4">
        <div v-for="(product, index) in products" :key="index" class="bg-white shadow-md hover:shadow-lg">
          <img :src="'https://static.photos/fashion/900x600/28.webp'" :alt="product.name" class="w-full">
          <div class="p-4">
            <h2 class="text-lg font-bold">{{ product.name }}</h2>
            <p class="text-gray-600">{{ product.description }}</p>
            <button class="mt-2 bg-yellow-500 text-white px-4 py-2 hover:bg-yellow-600">Add to Cart</button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
const products = [
  {
    name: 'Flower 1',
    description: 'A beautiful flower with a unique color scheme.',
    image: 'https://picsum.photos/900'
  },
  // Add more products as needed
]
</script>