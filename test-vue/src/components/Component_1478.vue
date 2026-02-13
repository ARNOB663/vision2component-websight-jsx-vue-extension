<template>
  <div class="bg-gray-100 font-sans leading-normal tracking-normal">
    <div class="container w-full md:max-w-3xl mx-auto pt-20">
      <header class="flex justify-between items-center bg-white shadow-md p-4">
        <img src="https://picsum.photos/900/600?image=80" alt="Logo" class="h-10">
        <nav class="hidden md:flex space-x-4">
          <a href="#" class="text-gray-700 hover:text-gray-900">Home</a>
          <a href="#" class="text-gray-700 hover:text-gray-900">Listings</a>
          <a href="#" class="text-gray-700 hover:text-gray-900">About</a>
          <a href="#" class="text-gray-700 hover:text-gray-900">Contact</a>
        </nav>
      </header>

      <main class="px-4 md:px-6 text-xl text-gray-800 leading-normal">
        <div class="font-sans font-bold break-normal text-gray-900 pt-6 pb-2 text-2xl mb-10 text-center">
          Welcome to Our Real Estate Agency
        </div>
        <p class="text-base">
          At our real estate agency, we are committed to providing our clients with the highest level of service and expertise. We understand that buying or selling a home is a big decision, and we are here to help you every step of the way. Whether you're looking for your dream home, selling your current home, or investing in real estate, we have the resources and expertise to help you.
        </p>

        <!-- Featured Listings Section -->
        <section class="mt-10">
          <h2 class="text-lg font-semibold mb-4">Featured Listings</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="listing in listings" :key="listing.id" class="bg-white rounded-lg overflow-hidden shadow-md">
              <img :src="`https://picsum.photos/900/600?image=${listing.image}`" alt="Property Image" class="w-full h-56 object-cover">
              <div class="p-4">
                <h3 class="text-xl font-semibold">{{ listing.title }}</h3>
                <p class="text-gray-600">{{ listing.description }}</p>
                <p class="text-lg font-medium mt-2">${{ listing.price }}</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Property Search Section -->
        <section class="mt-10">
          <h2 class="text-lg font-semibold mb-4">Property Search</h2>
          <form @submit.prevent="searchProperties" class="space-y-4">
            <div class="relative">
              <input type="text" v-model="searchQuery" placeholder="Search properties..." class="w-full py-2 px-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500">
            </div>
            <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Search</button>
          </form>
        </section>

        <!-- Contact Form Section -->
        <section class="mt-10">
          <h2 class="text-lg font-semibold mb-4">Contact Us</h2>
          <form @submit.prevent="submitContactForm" class="space-y-4">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
              <input id="name" v-model="contactName" type="text" class="mt-1 block w-full py-2 px-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500">
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input id="email" v-model="contactEmail" type="email" class="mt-1 block w-full py-2 px-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500">
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" v-model="contactMessage" rows="4" class="mt-1 block w-full py-2 px-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"></textarea>
            </div>
            <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Send Message</button>
          </form>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const listings = [
  {
    id: 1,
    title: 'Luxury Home',
    description: 'A beautiful and spacious luxury home.',
    price: 1200000,
    image: '81'
  },
  {
    id: 2,
    title: 'Modern Apartment',
    description: 'A modern and stylish apartment.',
    price: 700000,
    image: '80'
  }
];

const searchQuery = ref('');
const contactName = ref('');
const contactEmail = ref('');
const contactMessage = ref('');

const searchProperties = () => {
  // Handle search logic here
};

const submitContactForm = () => {
  // Handle form submission logic here
};
</script>