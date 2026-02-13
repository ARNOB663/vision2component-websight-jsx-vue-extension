<template>
  <div class="bg-gray-100">
    <header class="bg-white p-4 shadow">
      <h1 class="text-2xl font-bold">Real Estate Agency</h1>
    </header>

    <main class="container mx-auto p-4">
      <section class="my-8">
        <h2 class="text-xl font-bold mb-4">Properties for Sale</h2>
        <!-- Masonry layout goes here -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="property in properties" :key="property.id" class="bg-white rounded-lg overflow-hidden shadow-md">
            <img :src="'https://static.photos/real-estate/900x600/79.webp'" alt="Property Image" class="w-full h-56 object-cover">
            <div class="p-4">
              <h3 class="text-lg font-semibold">{{ property.title }}</h3>
              <p class="text-gray-700">{{ property.description }}</p>
              <p class="text-xl font-bold">${{ property.price }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="my-8">
        <h2 class="text-xl font-bold mb-4">Filters</h2>
        <!-- Filters go here -->
        <form @submit.prevent="applyFilters">
          <div class="mb-4">
            <label for="price" class="block text-sm font-medium text-gray-700">Price Range</label>
            <input type="range" id="price" name="price" min="0" max="1000000" v-model="filters.priceRange" class="mt-1 w-full">
          </div>
          <div class="mb-4">
            <label for="location" class="block text-sm font-medium text-gray-700">Location</label>
            <select id="location" name="location" v-model="filters.location" class="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md bg-white focus:outline-none sm:text-sm">
              <option value="">Select Location</option>
              <option value="city">City</option>
              <option value="suburb">Suburb</option>
            </select>
          </div>
          <div class="mb-4">
            <label for="bedrooms" class="block text-sm font-medium text-gray-700">Bedrooms</label>
            <input type="number" id="bedrooms" name="bedrooms" v-model="filters.bedrooms" class="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md bg-white focus:outline-none sm:text-sm">
          </div>
          <button type="submit" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Apply Filters</button>
        </form>
      </section>

      <section class="my-8">
        <h2 class="text-xl font-bold mb-4">Call to Action</h2>
        <!-- Call to action button goes here -->
        <button @click="showButton = true" class="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg cursor-pointer" v-if="showButton">Contact Us / Request a Showing</button>
      </section>
    </main>

    <footer class="bg-white p-4 shadow text-center">
      <p>© 2022 Real Estate Agency. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const properties = [
  {
    id: 1,
    image: 'https://via.placeholder.com/300',
    title: 'Beautiful House',
    description: 'A beautiful house in the city center.',
    price: 300000
  },
  // Add more properties as needed
];

const filters = ref({
  priceRange: [0, 1000000],
  location: '',
  bedrooms: ''
});

const showButton = ref(false);

onMounted(() => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      showButton.value = true;
    } else {
      showButton.value = false;
    }
  });
});

const applyFilters = () => {
  // Implement filter logic here
};
</script>