<template>
  <header class="flex items-center justify-between bg-white p-4">
    <img src="https://picsum.photos/300" alt="Logo" class="h-10">
    <input type="text" placeholder="Enter delivery address" class="border border-gray-300 p-2 rounded">
  </header>

  <main class="container mx-auto my-8 px-4">
    <h1 class="text-3xl mb-4">Our Food Delivery Services</h1>
    <p class="mb-8">
      Welcome to our food delivery service, where you can order your favorite meals from the comfort of your home. We offer a wide variety of cuisines from around the world, all prepared fresh and delivered to your doorstep. Our mission is to make food ordering as easy and convenient as possible, so you can enjoy the taste of your favorite meals without ever leaving your home.
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div v-for="(item, index) in foodItems" :key="index" class="bg-white p-4 rounded shadow">
        <img :src="'https://static.photos/restaurant/900x600/187.webp'" :alt="item.name" class="w-full h-48 object-cover mb-2">
        <h2 class="text-xl mb-2">{{ item.name }}</h2>
        <p class="text-gray-600 mb-2">{{ item.description }}</p>
        <p class="text-green-600 font-bold">${{ item.price }}</p>
      </div>
    </div>
  </main>
</template>

<script setup>
const foodItems = [
  {
    image: 'https://picsum.photos/900',
    name: 'Pizza',
    description: 'Delicious pizza made with fresh ingredients.',
    price: '10.99'
  },
  // Add more food items as needed
]
</script>