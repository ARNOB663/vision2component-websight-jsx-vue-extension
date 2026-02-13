<template>
  <div class="bg-gray-100">
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-4">Real Estate Site</h1>
      <div class="grid grid-cols-3 gap-4">
        <div v-for="(property, index) in properties" :key="index" class="bg-white rounded-lg shadow-md overflow-hidden">
          <img :src="'https://static.photos/real-estate/900x600/41.webp'" :alt="property.title" class="w-full">
          <div class="p-4">
            <h2 class="text-xl font-bold mb-2">{{ property.title }}</h2>
            <p class="text-gray-700 mb-2">{{ property.description }}</p>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const properties = ref([
  {
    title: 'House for Sale',
    description: 'This is a beautiful house located in the heart of the city. It has 3 bedrooms, 2 bathrooms, and a large backyard.',
    image: 'https://static.photos/real-estate/900x600/41.webp'
  },
  // Add more properties as needed
]);
</script>