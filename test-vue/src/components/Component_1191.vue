<template>
  <header class="flex justify-center items-center h-24 bg-gray-200">
    <img src="https://static.photos/business/300x300/193.webp" alt="Logo">
  </header>

  <nav class="flex justify-center items-center h-16 bg-gray-300">
    <ul class="flex">
      <li class="mx-2"><a href="#">Home</a></li>
      <li class="mx-2"><a href="#">About</a></li>
      <li class="mx-2"><a href="#">Contact</a></li>
    </ul>
  </nav>

  <main class="flex flex-wrap justify-center p-4">
    <div class="w-full md:w-1/2 lg:w-1/3 p-4">
      <div class="flex flex-col md:flex-row">
        <img src="https://static.photos/business/900x600/194.webp" alt="Featured Image">
        <p class="p-4">Your text goes here.</p>
      </div>
    </div>
  </main>

  <footer class="flex justify-center items-center h-24 bg-gray-200">
    <p>© 2022 Your Company</p>
  </footer>
</template>

<script setup>
// Your script setup logic here
</script>

<style scoped>
/* Your scoped styles here */
</style>