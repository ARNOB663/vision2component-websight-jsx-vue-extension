<template>
  <header class="bg-white p-4">
    <nav class="flex justify-between items-center">
      <div>
        <img src="https://static.photos/business/300x300/91.webp" alt="Company Logo" class="h-10">
      </div>
      <div class="hidden md:block">
        <ul class="flex space-x-4">
          <li><a href="#" class="text-gray-600 hover:text-gray-800">Home</a></li>
          <li><a href="#" class="text-gray-600 hover:text-gray-800">About</a></li>
          <li><a href="#" class="text-gray-600 hover:text-gray-800">Services</a></li>
          <li><a href="#" class="text-gray-600 hover:text-gray-800">Contact</a></li>
        </ul>
      </div>
      <div class="md:hidden">
        <button @click="toggleMenu" class="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  </header>

  <main class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">Welcome to Our Tech Company</h1>
    <p class="mb-4">
      At our tech company, we are dedicated to providing innovative and cutting-edge solutions to meet the needs of our clients. Our team of experts is committed to delivering high-quality products and services that exceed our clients' expectations. We are passionate about technology and are always looking for new ways to improve and innovate.
    </p>
    <!-- Add more content here -->
  </main>

  <footer class="bg-white p-4">
    <div class="container mx-auto">
      <ul class="flex space-x-4">
        <li><a href="#" class="text-gray-600 hover:text-gray-800">About Us</a></li>
        <li><a href="#" class="text-gray-600 hover:text-gray-800">Contact Us</a></li>
        <li><a href="#" class="text-gray-600 hover:text-gray-800">Social Media</a></li>
      </ul>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped>
.hamburger {
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background-color: #000;
  margin: 3px 0;
}
</style>