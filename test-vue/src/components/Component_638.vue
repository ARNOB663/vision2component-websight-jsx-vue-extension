<template>
  <header class="bg-cover bg-center h-screen" :style="{ backgroundImage: 'url(https://static.photos/architecture/1600x900/39.webp)' }">
    <nav class="container mx-auto px-6 py-4">
      <ul class="flex items-center justify-between">
        <li><a href="#" class="text-white hover:text-green-800 no-underline">Home</a></li>
        <li><a href="#" class="text-white hover:text-green-800 no-underline">About</a></li>
        <li><a href="#" class="text-white hover:text-green-800 no-underline">Projects</a></li>
        <li><a href="#" class="text-white hover:text-green-800 no-underline">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main class="container mx-auto px-6 py-4">
    <section class="grid grid-cols-2 gap-4">
      <!-- Add your project cards here -->
    </section>
  </main>

  <footer class="bg-gray-800 text-white">
    <div class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <p>Subscribe to our newsletter</p>
        <form @submit.prevent="subscribe">
          <input type="email" v-model="email" placeholder="Your email" class="px-3 py-2 rounded">
          <button type="submit" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Subscribe
          </button>
        </form>
      </div>
      <p>Contact us at info@architecturefirm.com</p>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');

const subscribe = () => {
  // Handle subscription logic here
};
</script>