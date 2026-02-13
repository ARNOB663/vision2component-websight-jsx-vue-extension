<template>
  <header class="bg-white shadow">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a href="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img src="https://static.photos/people/300x300/99.webp" alt="Logo" class="w-10 h-10">
        <span class="ml-3 text-xl">Non-Profit Organization</span>
      </a>
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a href="/" class="mr-5 hover:text-gray-900">Home</a>
        <a href="/about" class="mr-5 hover:text-gray-900">About</a>
        <a href="/contact" class="mr-5 hover:text-gray-900">Contact</a>
      </nav>
      <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
        Donate
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </header>
  <main class="container mx-auto px-4 py-6">
    <h1 class="text-3xl font-bold mb-4">Welcome to our Non-Profit Organization</h1>
    <p class="text-lg mb-6">
      At our Non-Profit Organization, we believe in the power of storytelling to inspire and engage our community. We are committed to using our platform to share inspiring articles and stories about our mission and the work we do.
    </p>
    <!-- Add your blog section here -->
  </main>
  <footer class="bg-white">
    <div class="container mx-auto px-8 pt-6 pb-8">
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/3 mb-6 md:mb-0">
          <h2 class="text-lg font-bold mb-2">Sign up for our newsletter</h2>
          <form @submit.prevent="handleNewsletterSignup">
            <input type="email" v-model="newsletterEmail" placeholder="Your email" class="w-full mb-2">
            <button type="submit" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Sign up
            </button>
          </form>
        </div>
        <!-- Add your contact and volunteer opportunities here -->
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

const newsletterEmail = ref('');

const handleNewsletterSignup = () => {
  // Handle newsletter signup logic here
};
</script>