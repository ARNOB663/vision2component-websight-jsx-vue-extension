<template>
  <div class="bg-fixed bg-center bg-cover h-screen" :style="{ backgroundImage: 'url(https://picsum.photos/seed/79/1600/900)' }">
    <nav class="container mx-auto px-6 py-4">
      <ul class="flex items-center justify-between">
        <li><a class="text-white hover:text-pink-200" href="#">Home</a></li>
        <li><a class="text-white hover:text-pink-200" href="#">About</a></li>
        <li><a class="text-white hover:text-pink-200" href="#">Services</a></li>
        <li><a class="text-white hover:text-pink-200" href="#">Portfolio</a></li>
        <li><a class="text-white hover:text-pink-200" href="#">Contact</a></li>
      </ul>
    </nav>
    <div class="container mx-auto px-6 flex flex-col items-center justify-center h-full">
      <h1 class="text-5xl font-bold text-white leading-tight">Welcome to Our Creative Agency</h1>
      <p class="text-2xl text-white">We are a full-service creative agency specializing in art supplies. Our team of experts will help you create a visually striking layout with a full-width background image, a diagonal navigation menu, and a bold, colorful design with a palette inspired by art supplies.</p>
    </div>
  </div>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Tailwind CSS is included via CDN in the template */
</style>