<template>
  <div class="bg-earth text-white">
    <div class="container mx-auto px-4 py-8">
      <header class="mb-8">
        <h1 class="text-4xl font-bold mb-4">Real Estate Company</h1>
        <p class="text-lg">Welcome to our Real Estate Company, where we specialize in finding your dream home. We have a wide selection of properties for sale, ranging from luxury apartments to cozy cottages. Our team of experienced realtors is dedicated to providing you with the best service possible. Whether you're looking for a new home, a vacation property, or a rental property, we're here to help.</p>
      </header>
      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-2">
          <!-- Grid of property images -->
          <div v-for="(property, index) in properties" :key="index" class="bg-gray-800 p-4 rounded-lg shadow-md">
            <img :src="'https://static.photos/real-estate/900x600/113.webp'" alt="Property Image" class="w-full h-48 object-cover mb-4" />
            <h3 class="text-xl font-semibold">{{ property.title }}</h3>
            <p class="text-lg">{{ property.description }}</p>
          </div>
        </div>
        <div class="col-span-1">
          <!-- Sidebar with search filters -->
          <div class="bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-4">Search Filters</h3>
            <form @submit.prevent="onSubmit">
              <div class="mb-4">
                <label for="location" class="block text-lg font-medium mb-2">Location</label>
                <input type="text" id="location" v-model="search.location" class="w-full px-4 py-2 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div class="mb-4">
                <label for="type" class="block text-lg font-medium mb-2">Type</label>
                <select id="type" v-model="search.type" class="w-full px-4 py-2 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Any</option>
                  <option value="apartment">Apartment</option>
                  <option value="cottage">Cottage</option>
                  <option value="house">House</option>
                </select>
              </div>
              <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Search</button>
            </form>
          </div>
        </div>
      </div>
      <footer class="mt-8">
        <h2 class="text-2xl font-bold mb-4">Contact Us</h2>
        <p class="text-lg">Phone: 123-456-7890</p>
        <p class="text-lg">Email: info@realestatecompany.com</p>
        <h2 class="text-2xl font-bold mt-8 mb-4">Testimonials</h2>
        <p class="text-lg">"I was so happy with my new home. The realtors were very professional and the process was smooth. I would definitely recommend them to anyone." - John Doe</p>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const properties = [
  {
    image: 'https://via.placeholder.com/600x400?text=Property+1',
    title: 'Luxury Apartment',
    description: 'A beautiful luxury apartment in the heart of the city.'
  },
  {
    image: 'https://via.placeholder.com/600x400?text=Property+2',
    title: 'Cozy Cottage',
    description: 'A charming cottage in the countryside.'
  }
];

const search = ref({
  location: '',
  type: ''
});

const onSubmit = () => {
  // Handle form submission
};
</script>

<style scoped>
.bg-earth {
  background-color: #b8a06f;
}
</style>