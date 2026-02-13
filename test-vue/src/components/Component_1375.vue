<template>
  <div class="flex flex-wrap relative h-screen overflow-hidden">
    <div class="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-500"
         :style="{ backgroundImage: `url(${backgroundImage})` }"></div>
    <div class="flex flex-wrap w-full h-full">
      <nav class="w-full lg:w-1/4 bg-white shadow-lg m-2 p-4">
        <h1 class="text-2xl font-bold mb-4">Architecture Firm</h1>
        <p class="mb-4">
          Welcome to our architecture firm website, where we specialize in creating unique and innovative designs. Our team of experienced architects and designers work closely with our clients to understand their needs and translate them into stunning architectural designs. We believe in the power of design to transform spaces, and we strive to create designs that are not only beautiful, but also functional and sustainable.
        </p>
        <img src="https://static.photos/architecture/900x600/177.webp" alt="Architecture" class="w-full">
      </nav>
      <main class="w-full lg:w-3/4 bg-white shadow-lg m-2 p-4">
        <h2 class="text-xl font-bold mb-4">Our Projects</h2>
        <div class="flex flex-wrap">
          <div class="w-full md:w-1/2 lg:w-1/3 p-2">
            <img src="https://static.photos/architecture/900x600/178.webp" alt="Project 1" class="w-full">
          </div>
          <div class="w-full md:w-1/2 lg:w-1/3 p-2">
            <img src="https://static.photos/architecture/900x600/179.webp" alt="Project 2" class="w-full">
          </div>
          <div class="w-full md:w-1/2 lg:w-1/3 p-2">
            <img src="https://static.photos/architecture/900x600/180.webp" alt="Project 3" class="w-full">
          </div>
          <!-- Add more project images as needed -->
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const backgroundImage = ref('https://static.photos/architecture/900x600/177.webp');

const handleScroll = () => {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 100) {
    backgroundImage.value = 'https://static.photos/architecture/900x600/178.webp';
  } else {
    backgroundImage.value = 'https://static.photos/architecture/900x600/177.webp';
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* Add any additional styles here */
</style>