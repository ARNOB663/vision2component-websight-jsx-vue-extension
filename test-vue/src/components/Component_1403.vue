<template>
  <div class="bg-gray-200 min-h-screen flex flex-col">
    <header class="flex justify-center items-center h-24 bg-white">
      <img src="https://static.photos/architecture/300x300/5.webp" alt="Logo" class="h-12">
    </header>
    <main class="container mx-auto my-8 px-4 flex-1">
      <h1 class="text-4xl text-center mb-8">Welcome to Our Architecture Firm</h1>
      <p class="text-lg mb-8">
        At our architecture firm, we are dedicated to creating unique and innovative designs that reflect the unique needs and aspirations of our clients. Our team of experienced architects and designers work closely with our clients to understand their vision and translate it into a design that is both beautiful and functional. We believe that architecture is more than just a profession - it's a way of life. We strive to create spaces that are not just beautiful, but also meaningful and comfortable.
      </p>
      <!-- Add your content here -->
    </main>
    <footer class="bg-white py-4">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl mb-4">Contact Us</h2>
        <form @submit.prevent="handleSubmit">
          <!-- Add your form fields here -->
          <input type="text" v-model="name" placeholder="Name" class="w-full p-2 mb-4 border border-gray-300 rounded">
          <input type="email" v-model="email" placeholder="Email" class="w-full p-2 mb-4 border border-gray-300 rounded">
          <textarea v-model="message" placeholder="Message" class="w-full p-2 mb-4 border border-gray-300 rounded"></textarea>
          <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </form>
      </div>
    </footer>
  </div>
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