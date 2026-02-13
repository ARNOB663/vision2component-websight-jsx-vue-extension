<template>
  <div class="bg-gray-100 font-sans leading-normal tracking-normal">
    <header class="bg-white text-center">
      <div class="mx-auto px-4">
        <h1 class="text-5xl font-bold text-gray-500 leading-tight py-12">Non-profit Organization</h1>
        <img src="https://static.photos/animals/900x600/162.webp" alt="Hero Image" class="mx-auto">
        <div class="py-12">
          <button @click="showForm = true" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Donate Now</button>
        </div>
      </div>
    </header>
    <footer class="bg-white text-center text-gray-800 py-8">
      <p class="text-xl">Our mission is to provide a heartfelt design to our users. We believe in the power of community and strive to make a difference in the world. Join us in our mission to make a difference.</p>
    </footer>
    <div v-if="showForm" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 class="text-2xl font-bold mb-4">Donation Form</h2>
        <!-- Add your donation form fields here -->
        <form @submit.prevent="submitForm">
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" v-model="formData.name" class="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          </div>
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" v-model="formData.email" class="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          </div>
          <div class="mb-4">
            <label for="amount" class="block text-sm font-medium text-gray-700">Amount</label>
            <input type="number" id="amount" v-model="formData.amount" class="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          </div>
          <button type="submit" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Submit Donation</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showForm = ref(false);
const formData = {
  name: '',
  email: '',
  amount: ''
};

const submitForm = () => {
  // Handle form submission logic here
  console.log('Form submitted:', formData);
};
</script>