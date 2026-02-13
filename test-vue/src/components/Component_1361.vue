<template>
  <header class="bg-white p-4">
    <nav class="flex justify-between items-center">
      <div>
        <a href="#" class="text-2xl font-bold">Media Company</a>
      </div>
      <div>
        <a href="#" class="mr-4">News</a>
        <a href="#" class="mr-4">Sports</a>
        <a href="#" class="mr-4">Entertainment</a>
      </div>
    </nav>
  </header>

  <main class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">Welcome to Media Company</h1>
    <p class="mb-4">
      At Media Company, we are dedicated to providing the latest and most accurate news and information to our readers. Our team of experienced journalists and editors work tirelessly to bring you the most important stories from around the world. Whether you're interested in breaking news, sports, entertainment, or lifestyle, you'll find it all here.
    </p>
    <!-- Add your content here -->
  </main>

  <footer class="bg-white p-4">
    <div class="flex justify-between">
      <div>
        <h2 class="text-xl font-bold mb-4">Latest Articles</h2>
        <!-- Add your latest articles here -->
      </div>
      <div>
        <h2 class="text-xl font-bold mb-4">Follow Us</h2>
        <!-- Add your social media feed here -->
      </div>
      <div>
        <h2 class="text-xl font-bold mb-4">Newsletter</h2>
        <form @submit.prevent="handleSubscribe">
          <input type="email" v-model="email" placeholder="Enter your email" class="p-2 mb-2 w-full">
          <button type="submit" class="bg-blue-500 text-white p-2 w-full">Sign Up</button>
        </form>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');

const handleSubscribe = () => {
  // Handle subscription logic here
};
</script>