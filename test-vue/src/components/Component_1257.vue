<template>
  <header class="bg-white py-4">
    <div class="container mx-auto flex justify-center">
      <img src="https://static.photos/nature/300x300/59.webp" alt="Logo">
    </div>
  </header>

  <nav class="bg-green-500 text-white">
    <div class="container mx-auto flex justify-center">
      <ul class="flex">
        <li class="px-4">Home</li>
        <li class="px-4">About</li>
        <li class="px-4">Services</li>
        <li class="px-4">Contact</li>
      </ul>
    </div>
  </nav>

  <main class="container mx-auto my-8">
    <section class="mb-8">
      <h2 class="text-2xl mb-4">About Us</h2>
      <p>Write your about us text here.</p>
      <button class="bg-green-500 text-white px-4 py-2">Learn More</button>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl mb-4">Contact Us</h2>
      <form @submit.prevent="handleSubmit">
        <input type="text" v-model="name" placeholder="Name" class="block border w-full p-2 mb-2">
        <input type="email" v-model="email" placeholder="Email" class="block border w-full p-2 mb-2">
        <textarea v-model="message" placeholder="Message" class="block border w-full p-2 mb-2"></textarea>
        <button type="submit" class="bg-green-500 text-white px-4 py-2">Submit</button>
      </form>
    </section>
  </main>

  <footer class="bg-green-500 text-white py-4">
    <div class="container mx-auto">
      <p>Contact Information</p>
      <p>Testimonials</p>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');

const handleSubmit = () => {
  // Handle form submission logic here
};
</script>