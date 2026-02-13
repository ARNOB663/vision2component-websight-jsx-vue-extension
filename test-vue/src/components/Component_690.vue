<template>
  <div class="flex flex-col items-center justify-center h-screen relative">
    <div class="z-10 w-full p-5 text-white text-center uppercase md:p-12">
      <h1 class="my-4 text-5xl font-bold leading-tight">Welcome to our Marketing Agency</h1>
      <p class="mb-8 leading-normal">
        We are a full-service digital marketing agency that helps businesses of all sizes to reach their goals. 
        We specialize in SEO, PPC, social media marketing, content marketing, and more. 
        Contact us today to learn more about how we can help your business grow.
      </p>
      <button class="mx-auto mt-5 font-bold text-white uppercase bg-red-500 rounded shadow-lg p-4">
        Get Started
      </button>
    </div>
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden bg-cover bg-center" style="background-image: url('https://static.photos/travel/1600x900/91.webp')">
      <div class="absolute w-full h-full bg-black opacity-50"></div>
    </div>
  </div>
</template>

<script setup>
// No script needed for this simple example
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>