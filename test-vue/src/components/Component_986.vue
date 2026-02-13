<template>
  <div class="bg-purple-100">
    <header class="w-full">
      <img src="https://static.photos/technology/900x600/188.webp" alt="Technology Image" class="w-full">
    </header>
    <nav class="bg-purple-800 text-white p-4">
      <button @click="toggleMenu" class="block sm:hidden">Menu</button>
      <ul :class="{ 'hidden': !isMenuOpen, 'flex': isMenuOpen }" class="sm:flex justify-around">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
    <main class="container mx-auto p-4">
      <h1 class="text-2xl mb-4">Welcome to Our Technology Company</h1>
      <p class="mb-4">At our technology company, we are dedicated to providing innovative and reliable solutions for all your technology needs. Our team of experts is committed to delivering the best possible service to our clients. We offer a wide range of services including software development, IT consulting, and more. Whether you're a small business or a large corporation, we're here to help you achieve your technology goals.</p>
      <!-- Add more sections as needed -->
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>