<template>
  <div class="bg-gray-100 font-sans leading-normal tracking-normal">
    <header class="bg-white text-center">
      <div class="container mx-auto">
        <h1 class="text-3xl font-bold">Real Estate Site</h1>
        <p class="text-lg">Welcome to our real estate site, where we specialize in finding your dream home.</p>
      </div>
    </header>
    <main class="container mx-auto">
      <section class="my-8">
        <h2 class="text-2xl font-bold">Featured Listings</h2>
        <!-- Here you would include your horizontal scrolling banner -->
        <div class="overflow-x-scroll whitespace-nowrap p-4">
          <div class="inline-block min-w-full overflow-hidden rounded-lg bg-white shadow-md">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Image</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Address</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Price</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr v-for="(listing, index) in featuredListings" :key="index" class="bg-white hover:bg-gray-50">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><img :src="'https://static.photos/real-estate/900x600/60.webp'" alt="Property Image" class="w-24 h-24 object-cover"></td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ listing.address }}</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${{ listing.price }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section class="my-8">
        <h2 class="text-2xl font-bold">Search Properties</h2>
        <!-- Here you would include your search bar -->
        <div class="mt-4">
          <input type="text" v-model="searchQuery" placeholder="Search properties..." class="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>
      </section>
    </main>
    <footer class="bg-white text-center text-gray-500 py-4">
      <div class="container mx-auto">
        <p>© 2022 Real Estate Site. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const featuredListings = [
  {
    image: 'https://via.placeholder.com/200',
    address: '123 Main St, Anytown, USA',
    price: '500000'
  },
  {
    image: 'https://via.placeholder.com/200',
    address: '456 Elm St, Othertown, USA',
    price: '750000'
  }
];

const searchQuery = ref('');
</script>