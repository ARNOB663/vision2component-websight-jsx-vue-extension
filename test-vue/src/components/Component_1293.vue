<template>
  <div class="bg-cover bg-center h-screen w-full" :style="{ backgroundImage: `url('https://static.photos/art/1600x900/94.webp')` }">
    <div class="container mx-auto flex flex-col items-center h-full justify-center">
      <div class="bg-white bg-opacity-75 p-10 rounded shadow-lg">
        <img class="w-16 h-16 mx-auto mb-5" src="https://static.photos/art/300x300/95.webp" alt="Logo">
        <h1 class="text-2xl mb-5 text-center">Welcome to Our Creative Agency</h1>
        <p class="text-center mb-5">We are a full-service creative agency specializing in branding, web design, and digital marketing. We help businesses grow by creating unique and effective brand identities, engaging websites, and effective social media campaigns.</p>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </div>
    </div>
  </div>
  <nav class="bg-white p-6 hidden">
    <!-- Navigation menu goes here -->
  </nav>
  <footer class="bg-gray-800 text-white p-6">
    <!-- Footer content goes here -->
  </footer>
</template>

<script setup>
// Your script logic goes here
</script>

<style scoped>
/* Your scoped styles go here */
</style>