<template>
  <header class="bg-white text-center py-10">
    <img src="https://picsum.photos/300" alt="Real Estate Logo" class="inline-block">
  </header>
  <main class="container mx-auto px-4 py-10">
    <h1 class="text-3xl mb-5">Welcome to Real Estate</h1>
    <p class="mb-10">At Real Estate, we are committed to providing our clients with the best possible service. We understand that buying or selling a home is a big decision, and we are here to help you every step of the way. Whether you're looking for a new home, selling your current one, or simply looking for advice, we're here to help.</p>
    <div class="grid grid-cols-3 gap-4">
      <div v-for="(property, index) in properties" :key="index" class="bg-white p-4">
        <img :src="`https://picsum.photos/900?image=${property.image}`" :alt="property.title" class="w-full h-auto mb-2">
        <h2 class="text-xl mb-2">{{ property.title }}</h2>
        <p>{{ property.description }}</p>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';

const properties = ref([
  {
    image: 183,
    title: 'House for Sale',
    description: 'This beautiful house is waiting for you to make it your own.'
  },
  // Add more properties as needed
]);
</script>