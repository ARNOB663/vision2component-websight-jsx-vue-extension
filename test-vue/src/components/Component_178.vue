<template>
  <div class="bg-orange-100">
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl text-center font-bold mb-8">Welcome to Our Real Estate Agency</h1>
      <p class="text-center mb-8">We are a professional real estate agency that specializes in finding your dream home. With a wide selection of properties, we guarantee to find the perfect match for you.</p>
      <div class="grid grid-cols-3 gap-4">
        <div class="bg-white p-4 rounded shadow" v-for="(property, index) in properties" :key="index">
          <img :src="'https://picsum.photos/seed/178/900/600'" alt="Property Image" class="w-full h-64 object-cover mb-4">
          <h2 class="text-xl font-bold mb-2">{{ property.address }}</h2>
          <p class="text-green-600 font-bold mb-4">{{ property.price }}</p>
          <button class="bg-green-600 text-white px-4 py-2 rounded">View Details</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const properties = ref([
  {
    image: "https://picsum.photos/seed/178/900/600",
    address: "123 Main St, City, Country",
    price: "$500,000"
  },
  // Add more properties as needed
]);
</script>