<template>
  <div class="bg-gray-100">
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-4">Welcome to Our Real Estate Agency</h1>
      <p class="mb-8">At our agency, we specialize in finding the perfect home for you. Whether you're looking for a luxury estate, a cozy cottage, or a spacious villa, we've got you covered. Our team of experienced real estate agents will help you find the property of your dreams.</p>

      <div class="relative">
        <input type="text" class="w-full p-2 border rounded" placeholder="Search for properties..." v-model="searchQuery" />
        <div class="absolute right-0 top-0 mt-2 mr-2">
          <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" @click="searchProperties">
            Search
          </button>
        </div>
      </div>

      <div class="grid grid-cols-3 gap-4 mt-8">
        <div class="bg-white rounded shadow p-4" v-for="(property, index) in filteredProperties" :key="index">
          <img :src="'https://static.photos/real-estate/900x600/23.webp'" alt="Property" class="w-full h-48 object-cover mb-4" />
          <h2 class="text-xl font-bold">{{ property.title }}</h2>
          <p class="text-gray-600">{{ property.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const properties = [
  {
    image: "https://static.photos/real-estate/900x600/23.webp",
    title: "Property 1",
    description: "This is a beautiful property located in the heart of the city."
  },
  // Add more properties here
];

const searchQuery = ref('');

const filteredProperties = computed(() => {
  return properties.filter(property => 
    property.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const searchProperties = () => {
  // Implement search logic here if needed
};
</script>