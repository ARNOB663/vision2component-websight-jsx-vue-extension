<template>
  <header class="w-full">
    <img src="https://static.photos/business/900x600/90.webp" alt="Header Image" class="w-full">
    <div class="flex justify-center items-center p-4">
      <img src="https://static.photos/business/300x300/91.webp" alt="Logo" class="h-16">
    </div>
  </header>
  <nav class="w-full bg-gray-800 text-white p-4">
    <ul class="flex justify-around">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
  <main class="flex justify-around p-4">
    <div class="w-1/3 bg-red-500 text-white p-4">
      <h2>Column 1</h2>
      <p>This is the first column of the main content. It has a contrasting color of red.</p>
    </div>
    <div class="w-1/3 bg-green-500 text-white p-4">
      <h2>Column 2</h2>
      <p>This is the second column of the main content. It has a contrasting color of green.</p>
    </div>
    <div class="w-1/3 bg-indigo-500 text-white p-4">
      <h2>Column 3</h2>
      <p>This is the third column of the main content. It has a contrasting color of indigo.</p>
    </div>
  </main>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>