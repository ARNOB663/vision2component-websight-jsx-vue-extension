<template>
  <header class="bg-white p-4 flex justify-center">
    <img src="https://picsum.photos/seed/389/300/300" alt="Real Estate Logo" class="h-10">
  </header>
  <nav class="bg-white p-4 flex justify-center space-x-4">
    <a href="#" class="text-gray-600 hover:text-gray-800">Home</a>
    <a href="#" class="text-gray-600 hover:text-gray-800">Properties</a>
    <a href="#" class="text-gray-600 hover:text-gray-800">About Us</a>
    <a href="#" class="text-gray-600 hover:text-gray-800">Contact</a>
  </nav>
  <main class="p-4">
    <h1 class="text-2xl text-center mb-4">Welcome to our Real Estate Company</h1>
    <p class="text-center mb-8">We are a leading real estate company with a reputation for excellence. Our team of experienced professionals is dedicated to providing you with the best possible service. Whether you're looking for a new home, a rental property, or commercial space, we have the resources and expertise to help you find your dream property.</p>
    <div class="grid grid-cols-3 gap-4">
      <div v-for="(property, index) in properties" :key="index" class="bg-white p-4 rounded shadow">
        <img :src="'https://picsum.photos/seed/389/900/600'" alt="Property" class="mb-4">
        <h2 class="text-xl mb-2">{{ property.title }}</h2>
        <p class="text-gray-600 mb-4">${{ property.price }}</p>
        <a href="#" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">View Details</a>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';

const properties = ref([
  {
    image: 'https://picsum.photos/seed/389/900/600',
    title: 'Property 1',
    price: '1,000,000'
  },
  // Add more properties as needed
]);
</script>