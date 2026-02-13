<template>
  <div class="bg-gray-100">
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold text-center mb-8">Welcome to our Travel Agency</h1>
      <p class="text-lg text-center mb-8">
        We are a premier travel agency specializing in providing unforgettable travel experiences. Our team of experienced travel agents are dedicated to helping you plan your dream vacation. Whether you're looking for a relaxing beach getaway, an adventurous trek, or a cultural immersion, we've got you covered.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="(trip, index) in trips" :key="index" class="bg-white rounded-lg shadow-lg p-4">
          <img :src="'https://picsum.photos/900/600?image=' + trip.image" :alt="trip.name" class="w-full h-64 object-cover rounded-lg mb-4">
          <h2 class="text-2xl font-bold mb-2">{{ trip.name }}</h2>
          <p class="text-gray-700 mb-2">{{ trip.price }}</p>
          <p class="text-gray-600">{{ trip.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const trips = [
  {
    image: "122",
    name: "Travel to Paris",
    price: "Starting from $1,000",
    description: "Experience the vibrant culture, stunning architecture, and delicious food of Paris."
  },
  // Add more trips here
];
</script>