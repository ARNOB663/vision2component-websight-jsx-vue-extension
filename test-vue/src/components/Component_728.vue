<template>
  <div class="bg-gray-100">
    <header class="flex justify-center items-center h-screen">
      <div class="text-center">
        <h1 class="text-4xl font-bold">Welcome to Our Creative Agency</h1>
        <p class="text-xl mt-4">We are a full-service creative agency specializing in branding, web design, and digital marketing.</p>
      </div>
    </header>

    <nav :class="{ 'hidden': !isNavVisible }">
      <ul class="flex justify-center space-x-4 mt-4">
        <li><a href="#" class="text-lg">Home</a></li>
        <li><a href="#" class="text-lg">About</a></li>
        <li><a href="#" class="text-lg">Services</a></li>
        <li><a href="#" class="text-lg">Contact</a></li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isNavVisible = ref(false);

onMounted(() => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      isNavVisible.value = true;
    } else {
      isNavVisible.value = false;
    }
  });
});
</script>