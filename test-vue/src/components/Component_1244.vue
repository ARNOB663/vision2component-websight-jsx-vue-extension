<template>
  <header class="bg-gray-500 text-white p-4">
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-2xl font-bold">Non-Profit Organization</h1>
      <nav>
        <ul class="flex">
          <li class="mr-4"><a href="#">Home</a></li>
          <li class="mr-4"><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main class="container mx-auto p-4">
    <section class="my-8">
      <h2 class="text-3xl font-bold mb-4">Welcome to our Non-Profit Organization</h2>
      <p class="text-lg mb-4">
        We are a non-profit organization dedicated to making a difference in the world. We believe in the power of community and strive to create a better world for all.
      </p>
      <img src="https://static.photos/space/900x600/46.webp" alt="Non-Profit Organization" class="w-full h-64 object-cover">
    </section>

    <section class="my-8">
      <h2 class="text-3xl font-bold mb-4">Our Mission</h2>
      <p class="text-lg mb-4">
        Our mission is to provide education, health care, and other essential services to those in need. We believe that everyone has the right to a decent life, regardless of their background or circumstances.
      </p>
      <img src="https://static.photos/space/900x600/47.webp" alt="Our Mission" class="w-full h-64 object-cover">
    </section>
  </main>

  <footer class="bg-gray-500 text-white p-4">
    <div class="container mx-auto flex justify-between items-center">
      <div>
        <p>Follow us on social media:</p>
        <ul class="flex">
          <li class="mr-4"><a href="#">Facebook</a></li>
          <li class="mr-4"><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
      </div>
      <div>
        <p>Contact us:</p>
        <p>Email: info@nonprofit.org</p>
        <p>Phone: 123-456-7890</p>
      </div>
      <div>
        <p>Sign up for our newsletter:</p>
        <form @submit.prevent="handleSignup">
          <input type="email" v-model="email" placeholder="Your email" class="p-2 mt-2 w-full">
          <button type="submit" class="bg-white text-gray-500 p-2 mt-2 w-full">Sign up</button>
        </form>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');

const handleSignup = () => {
  // Handle sign up logic here
};
</script>

<style scoped>
/* Add any custom styles here */
</style>