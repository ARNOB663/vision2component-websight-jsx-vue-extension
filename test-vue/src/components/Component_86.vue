<template>
  <header class="fixed top-0 right-0 w-full bg-white shadow-md">
    <nav class="flex justify-end p-4">
      <a href="#" class="px-4 py-2 text-gray-800 hover:text-gray-600">Home</a>
      <a href="#" class="px-4 py-2 text-gray-800 hover:text-gray-600">New Items</a>
      <a href="#" class="px-4 py-2 text-gray-800 hover:text-gray-600">Bestsellers</a>
      <a href="#" class="px-4 py-2 text-gray-800 hover:text-gray-600">Latest Trends</a>
    </nav>
  </header>

  <main class="container mx-auto pt-20 pb-10">
    <section class="flex justify-between mb-10">
      <div class="w-1/3 p-4 bg-white shadow-md">
        <h2 class="text-2xl mb-4">New Items</h2>
        <!-- Add your new items here -->
      </div>

      <div class="w-1/3 p-4 bg-white shadow-md">
        <h2 class="text-2xl mb-4">Bestsellers</h2>
        <!-- Add your bestsellers here -->
      </div>

      <div class="w-1/3 p-4 bg-white shadow-md">
        <h2 class="text-2xl mb-4">Latest Trends</h2>
        <!-- Add your latest trends here -->
      </div>
    </section>
  </main>
</template>

<script setup>
// Your script logic can go here if needed
</script>

<style scoped>
/* Your scoped styles can go here */
</style>