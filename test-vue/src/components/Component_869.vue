<template>
  <header class="bg-purple-500 text-white p-4">
    <h1 class="text-2xl font-bold">Real Estate Brokerage</h1>
    <div class="mt-4 flex items-center">
      <input type="text" v-model="searchQuery" placeholder="Search..." class="px-4 py-2 rounded-l">
      <button @click="handleSearch" class="bg-purple-700 text-white px-4 py-2 rounded-r">Search</button>
    </div>
  </header>

  <main class="container mx-auto p-4">
    <h2 class="text-xl font-bold mb-4">Featured Listings</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="listing in filteredListings" :key="listing.id" class="bg-white shadow-md rounded-lg overflow-hidden">
        <img :src="'https://static.photos/real-estate/900x600/71.webp'" alt="Property Image" class="w-full h-64 object-cover">
        <div class="p-4">
          <h3 class="text-lg font-semibold">{{ listing.title }}</h3>
          <p class="text-gray-600">{{ listing.description }}</p>
          <p class="text-xl font-bold mt-2">${{ listing.price }}</p>
        </div>
      </div>
    </div>
  </main>

  <footer class="bg-purple-500 text-white p-4 text-center">
    <p>&copy; 2022 Real Estate Brokerage. All rights reserved.</p>
  </footer>
</template>

<script setup>
import { ref, computed } from 'vue';

const searchQuery = ref('');
const listings = [
  {
    id: 1,
    image: 'https://via.placeholder.com/600x400',
    title: 'Modern House',
    description: 'A beautiful modern house in the heart of the city.',
    price: 350000,
    type: 'House',
    location: 'City Center'
  },
  // Add more listings as needed
];

const filteredListings = computed(() => {
  return listings.filter(listing => {
    return listing.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
           listing.description.toLowerCase().includes(searchQuery.value.toLowerCase());
  });
});

const handleSearch = () => {
  // Implement search logic if needed
};
</script>