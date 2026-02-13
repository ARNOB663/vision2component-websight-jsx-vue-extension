<template>
  <header class="flex items-center justify-center h-64 bg-indigo-500 text-white">
    <img src="https://static.photos/technology/300x300/98.webp" alt="Logo" class="h-32">
  </header>
  <main class="container mx-auto px-4 py-6">
    <section class="flex flex-wrap -mx-1 lg:-mx-4">
      <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        <article class="overflow-hidden rounded-lg shadow-lg">
          <img src="https://static.photos/technology/900x600/99.webp" alt="Tech" class="block h-auto w-full">
          <header class="flex items-center justify-between leading-tight p-2 md:p-4">
            <h1 class="text-lg">Our Tech</h1>
          </header>
          <footer class="flex items-center justify-between leading-none p-2 md:p-4">
            <p class="text-sm">We use the latest technology to provide innovative solutions to our clients. Our team of experts is constantly researching and developing new technologies to stay at the forefront of the industry.</p>
          </footer>
        </article>
      </div>
      <!-- Repeat the above section for each card -->
    </section>
  </main>
  <footer class="bg-indigo-500 text-white">
    <div class="container mx-auto px-4 py-6">
      <h2 class="text-2xl mb-4">Sign up for our newsletter</h2>
      <form @submit.prevent="handleSubmit">
        <input type="email" v-model="email" placeholder="Enter your email" class="w-full p-2 mb-4">
        <button type="submit" class="w-full p-2 bg-white text-indigo-500">Subscribe</button>
      </form>
      <div class="mt-4">
        <a href="#" class="text-white">Facebook</a>
        <a href="#" class="text-white ml-4">Twitter</a>
        <a href="#" class="text-white ml-4">Instagram</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');

const handleSubmit = () => {
  // Handle form submission logic here
};
</script>