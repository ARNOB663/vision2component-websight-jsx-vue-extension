<template>
  <header class="flex items-center justify-between p-4 bg-indigo-800">
    <h1 class="text-2xl">Tech Company</h1>
    <button class="p-2 bg-indigo-600 text-white rounded">Menu</button>
  </header>

  <main class="flex flex-col items-center justify-center h-screen">
    <img src="https://static.photos/business/900x600/40.webp" alt="Circuit Board" class="absolute inset-0 w-full h-full object-cover">
    <div class="relative z-10 p-4 bg-indigo-800 bg-opacity-75 rounded">
      <h2 class="text-3xl">Welcome to Tech Company</h2>
      <p class="text-lg">
        At Tech Company, we are committed to providing innovative and efficient solutions for your technology needs. Our team of experts is dedicated to delivering the best possible service, ensuring your satisfaction is our top priority.
      </p>
    </div>
  </main>

  <footer class="p-4 bg-indigo-800">
    <p class="text-center">© 2022 Tech Company. All rights reserved.</p>
  </footer>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>