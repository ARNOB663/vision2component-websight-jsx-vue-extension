<template>
  <header class="bg-white p-4 flex items-center justify-between">
    <img src="https://static.photos/people/300x300/10.webp" alt="Logo" class="h-16">
    <nav>
      <ul class="flex space-x-4">
        <li><a href="#" class="text-gray-600 hover:text-gray-900">Home</a></li>
        <li><a href="#" class="text-gray-600 hover:text-gray-900">Donations</a></li>
        <li><a href="#" class="text-gray-600 hover:text-gray-900">Volunteer Opportunities</a></li>
        <li><a href="#" class="text-gray-600 hover:text-gray-900">Blog</a></li>
      </ul>
    </nav>
  </header>

  <main class="flex flex-col items-center justify-center h-screen relative bg-gray-100">
    <video autoplay loop muted class="absolute z-10 w-auto min-w-full min-h-full max-w-none">
      <source src="https://static.photos/people/900x600/10.webp" type="video/mp4">
    </video>
    <div class="relative z-20 text-white text-center">
      <h1 class="text-4xl font-bold mb-4">Welcome to our Non-Profit Organization</h1>
      <p class="text-lg">We are a community of volunteers dedicated to making a difference in the world.</p>
    </div>
  </main>
</template>

<script setup>
// Your script logic here if needed
</script>

<style scoped>
/* Your scoped styles here if needed */
</style>