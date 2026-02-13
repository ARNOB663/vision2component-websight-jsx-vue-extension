<template>
  <header class="flex justify-between items-center p-4 bg-green-600 text-white">
    <div>
      <img src="https://picsum.photos/seed/194/300/300" alt="Logo" class="h-10">
      <p class="text-sm">Your tagline goes here</p>
    </div>
    <nav>
      <ul class="flex space-x-4">
        <li><a href="#" class="hover:underline">Home</a></li>
        <li><a href="#" class="hover:underline">About</a></li>
        <li><a href="#" class="hover:underline">Programs</a></li>
        <li><a href="#" class="hover:underline">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main class="p-4">
    <div class="w-full h-64 bg-cover bg-center mb-4" :style="{ backgroundImage: 'url(https://picsum.photos/seed/194/1600/900)' }"></div>
    <h1 class="text-2xl mb-4">Welcome to Our Education Institution</h1>
    <p class="mb-4">Your long and detailed welcome message goes here. This is a place to introduce your institution and its mission. You can talk about the educational philosophy, the values of the institution, and the impact it has made in the community.</p>
    <!-- Add your slider here -->
  </main>

  <!-- Add your sections for curriculum, faculty, and student life here -->
</template>

<script setup>
// Your script setup logic here
</script>

<style scoped>
/* Your scoped styles here */
</style>