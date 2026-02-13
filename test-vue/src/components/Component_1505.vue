<template>
  <div class="bg-red-100 min-h-screen flex flex-col justify-between">
    <header class="bg-orange-500 text-white text-center py-4">
      <h1 class="text-4xl font-bold">Welcome to Food and Beverage</h1>
    </header>
    <nav class="bg-gray-800 text-white text-center py-2">
      <!-- Navigation links here -->
    </nav>
    <main class="container mx-auto px-4 py-8">
      <p class="text-lg text-justify mb-8">
        At Food and Beverage, we believe in the power of food to bring people together. Our menu is a celebration of the finest ingredients, carefully crafted by our chefs to create dishes that are not just nourishing, but also beautiful. We use only the freshest, locally sourced ingredients to create dishes that are not only delicious, but also healthy. Our passion for food is contagious, and we hope to share it with you.
      </p>
      <div class="flex flex-wrap gap-4">
        <div class="w-full md:w-1/2 lg:w-1/3 p-4">
          <img src="https://static.photos/food/900x600/107.webp" alt="Food Image" class="w-full h-auto rounded-lg shadow-md">
        </div>
        <div class="w-full md:w-1/2 lg:w-2/3 p-4">
          <img src="https://static.photos/food/900x600/108.webp" alt="Beverage Image" class="w-full h-auto rounded-lg shadow-md">
        </div>
      </div>
    </main>
    <aside class="bg-gray-200 w-1/4 p-4">
      <!-- Sidebar content here -->
    </aside>
    <footer class="bg-gray-800 text-white text-center py-2">
      <!-- Footer content here -->
    </footer>
  </div>
</template>

<script setup>
// Your script setup logic here
</script>

<style scoped>
/* Add your custom styles here */
</style>