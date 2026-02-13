<template>
  <header class="bg-green-500 text-white p-4 flex justify-between items-center">
    <div>
      <h1 class="text-2xl font-bold">Florist</h1>
      <p class="text-sm">Welcome to our Florist, where we specialize in creating beautiful and unique arrangements for any occasion.</p>
    </div>
    <div>
      <input type="text" placeholder="Search..." class="p-2 rounded-md">
    </div>
  </header>
  <main class="p-4">
    <h2 class="text-xl font-bold mb-4">Featured Arrangements</h2>
    <div class="flex overflow-x-auto space-x-4 pb-4">
      <div class="bg-white rounded-lg shadow-md p-4">
        <img src="https://picsum.photos/seed/14/900/600" alt="Flowers" class="w-full h-64 object-cover">
        <h3 class="text-lg font-bold mt-2">Flowers</h3>
        <p class="text-sm">A beautiful bouquet of flowers for any occasion.</p>
      </div>
      <!-- Add more arrangements here -->
    </div>
  </main>
</template>

<script setup>
// Your script logic here if needed
</script>

<style scoped>
/* Any scoped styles here */
</style>