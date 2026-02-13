<template>
  <header class="flex items-center justify-between bg-white p-4">
    <img src="https://static.photos/fashion/300x300/129.webp" alt="Logo" class="h-10">
    <nav>
      <ul class="flex space-x-4">
        <li><a href="#" class="text-gray-800 hover:text-blue-500">Home</a></li>
        <li><a href="#" class="text-gray-800 hover:text-blue-500">About</a></li>
        <li><a href="#" class="text-gray-800 hover:text-blue-500">Collections</a></li>
        <li><a href="#" class="text-gray-800 hover:text-blue-500">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section class="relative">
      <img src="https://static.photos/fashion/900x600/130.webp" alt="Hero Image" class="w-full">
      <div class="absolute inset-0 flex items-center justify-center">
        <h1 class="text-5xl text-white">Welcome to our Fashion Brand</h1>
      </div>
    </section>

    <section class="p-4">
      <p class="text-lg">
        At our fashion brand, we believe in the power of fashion to express individuality and self-expression. We offer a wide range of styles and designs, from casual wear to formal attire, to suit every taste and occasion. Our collections are carefully curated to reflect the latest trends and styles, and we pride ourselves on offering high-quality, stylish clothing that is not only fashionable but also comfortable and durable.
      </p>
    </section>
  </main>

  <footer class="bg-gray-800 text-white p-4">
    <div class="flex items-center justify-between">
      <div>
        <p>Sign up for our newsletter:</p>
        <form @submit.prevent="subscribe">
          <input v-model="email" type="email" placeholder="Enter your email" class="p-2 mt-2 rounded">
          <button type="submit" class="bg-white text-gray-800 p-2 mt-2 rounded">Subscribe</button>
        </form>
      </div>
      <div>
        <p>Follow us on social media:</p>
        <div class="flex space-x-2">
          <a href="#"><img src="https://static.photos/fashion/900x600/131.webp" alt="Facebook" class="h-6"></a>
          <a href="#"><img src="https://static.photos/fashion/900x600/132.webp" alt="Twitter" class="h-6"></a>
          <a href="#"><img src="https://static.photos/fashion/900x600/133.webp" alt="Instagram" class="h-6"></a>
        </div>
      </div>
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