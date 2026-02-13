<template>
  <header class="bg-cover bg-center h-64 flex items-center justify-center" :style="{ backgroundImage: 'url(https://picsum.photos/seed/74/1600/900)' }">
    <img class="h-16" src="https://picsum.photos/seed/74/300/300" alt="Logo">
  </header>
  <nav class="bg-white p-4 shadow">
    <ul class="flex space-x-4">
      <li><a class="text-purple-500 hover:text-purple-700" href="#">Home</a></li>
      <li><a class="text-purple-500 hover:text-purple-700" href="#">About</a></li>
      <li><a class="text-purple-500 hover:text-purple-700" href="#">Contact</a></li>
    </ul>
  </nav>
  <main class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">Welcome to our Food Blog</h1>
    <p class="mb-4">
      Welcome to our food blog, where we share our passion for all things food. From the best recipes to the latest food trends, we strive to provide you with the information you need to make the best decisions about what to eat. Whether you're a seasoned chef or a beginner cook, we're here to help you every step of the way. So, whether you're looking for a new recipe to try, or just want to learn something new about food, we've got you covered.
    </p>
    <!-- Blog posts go here -->
  </main>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Tailwind CSS is included via CDN in the template */
</style>