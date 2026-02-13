<template>
  <header class="flex justify-between items-center p-4">
    <div class="w-32 h-12 bg-gray-200">
      <!-- Logo -->
    </div>
    <div class="space-y-2">
      <div class="w-8 h-0.5 bg-black"></div>
      <div class="w-8 h-0.5 bg-black"></div>
      <div class="w-8 h-0.5 bg-black"></div>
    </div>
  </header>

  <main class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-4xl font-bold text-center">Welcome to our Tech Company</h1>
    <p class="text-center max-w-lg mt-4">
      At our tech company, we are committed to providing innovative and efficient solutions for your business needs. Our team of experts is dedicated to delivering the best possible service, ensuring your business runs smoothly and efficiently.
    </p>
    <button class="mt-4 px-4 py-2 bg-pink-500 text-white rounded">Learn More</button>
  </main>

  <footer class="p-4 bg-gray-200 text-center">
    <p>© 2022 Tech Company. All rights reserved.</p>
  </footer>
</template>

<script setup>
// No script needed for this simple example
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>