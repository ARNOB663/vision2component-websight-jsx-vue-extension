<template>
  <div class="bg-cover bg-center h-screen" :style="{ backgroundImage: 'url(https://static.photos/health/1600x900/134.webp)' }">
    <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-xl tracking-tight">Health & Wellness</span>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a href="#services" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Services
          </a>
          <a href="#testimonials" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Testimonials
          </a>
          <a href="#blog" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            Blog
          </a>
        </div>
      </div>
    </nav>
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <h2 class="text-2xl font-bold mb-4">Services</h2>
          <p class="text-gray-600">We provide a wide range of health and wellness services including personal training, nutrition coaching, and mindfulness workshops.</p>
        </div>
        <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <h2 class="text-2xl font-bold mb-4">Testimonials</h2>
          <p class="text-gray-600">See what our clients are saying about our services.</p>
        </div>
        <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <h2 class="text-2xl font-bold mb-4">Blog</h2>
          <p class="text-gray-600">Read our latest health and wellness articles.</p>
        </div>
      </div>
    </div>
    <footer class="bg-gray-800 text-white p-6">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl font-bold mb-4">Subscribe to our newsletter</h2>
        <form @submit.prevent="handleSubmit">
          <input type="email" v-model="email" placeholder="Enter your email" class="w-full p-2 mb-4">
          <button type="submit" class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
            Subscribe
          </button>
        </form>
        <a href="#terms" class="block mt-4 text-teal-200 hover:text-white">
          Terms and Conditions
        </a>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');

const handleSubmit = () => {
  // Handle form submission logic here
};
</script>