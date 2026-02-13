<template>
  <div class="relative">
    <video class="w-full h-full object-cover" autoplay loop muted>
      <source src="https://static.photos/business/900x600/50.webp" type="video/mp4">
    </video>
    <div class="absolute inset-0 flex items-center justify-center">
      <h1 class="text-white text-4xl font-bold">Welcome to our Tech Company</h1>
    </div>
  </div>
  <nav class="bg-white p-4">
    <div class="container mx-auto flex items-center justify-between">
      <a href="#" class="text-xl font-bold">Tech Company</a>
      <div class="hidden md:block">
        <a href="#" class="px-2 py-1 text-gray-600 hover:text-black">Home</a>
        <a href="#" class="px-2 py-1 text-gray-600 hover:text-black">About</a>
        <a href="#" class="px-2 py-1 text-gray-600 hover:text-black">Services</a>
        <a href="#" class="px-2 py-1 text-gray-600 hover:text-black">Contact</a>
      </div>
      <div class="md:hidden">
        <button @click="toggleMenu" class="hamburger">
          <span :class="{ 'hamburger__line--open': isOpen }"></span>
          <span :class="{ 'hamburger__line--open': isOpen }"></span>
          <span :class="{ 'hamburger__line--open': isOpen }"></span>
        </button>
      </div>
    </div>
  </nav>
  <div v-if="isOpen" class="fixed top-0 left-0 w-full bg-white p-4">
    <a href="#" class="block px-2 py-1 text-gray-600 hover:text-black">Home</a>
    <a href="#" class="block px-2 py-1 text-gray-600 hover:text-black">About</a>
    <a href="#" class="block px-2 py-1 text-gray-600 hover:text-black">Services</a>
    <a href="#" class="block px-2 py-1 text-gray-600 hover:text-black">Contact</a>
  </div>
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

.hamburger__line {
  width: 25px;
  height: 3px;
  background-color: #000;
  margin: 4px 0;
  transition: transform 0.3s ease-in-out;
}

.hamburger__line--open {
  transform: rotate(45deg) translate(6px, 8px);
}

.hamburger__line--open:nth-child(2) {
  opacity: 0;
}

.hamburger__line--open:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -8px);
}
</style>