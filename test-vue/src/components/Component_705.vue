<template>
  <header class="bg-white p-4 flex justify-between items-center">
    <div>
      <!-- Logo -->
      <img src="https://static.photos/real-estate/300x300/107.webp" alt="Logo">
    </div>
    <div class="flex items-center">
      <!-- Search Bar -->
      <input type="text" placeholder="Search..." class="border rounded p-2">
      <!-- User Account Information -->
      <div class="ml-4">
        <img src="https://static.photos/real-estate/900x600/108.webp" alt="User" class="rounded-full">
      </div>
    </div>
  </header>

  <main class="container mx-auto p-4">
    <!-- Multi-column layout -->
    <div class="grid grid-cols-3 gap-4">
      <!-- Property 1 -->
      <div class="bg-white p-4 rounded shadow">
        <img src="https://static.photos/real-estate/900x600/109.webp" alt="Property 1" class="w-full">
        <h2 class="text-lg font-bold mt-2">Property 1</h2>
        <p class="text-gray-600 mt-2">Details about property 1...</p>
      </div>
      <!-- Property 2 -->
      <div class="bg-white p-4 rounded shadow">
        <img src="https://static.photos/real-estate/900x600/110.webp" alt="Property 2" class="w-full">
        <h2 class="text-lg font-bold mt-2">Property 2</h2>
        <p class="text-gray-600 mt-2">Details about property 2...</p>
      </div>
      <!-- Property 3 -->
      <div class="bg-white p-4 rounded shadow">
        <img src="https://static.photos/real-estate/900x600/111.webp" alt="Property 3" class="w-full">
        <h2 class="text-lg font-bold mt-2">Property 3</h2>
        <p class="text-gray-600 mt-2">Details about property 3...</p>
      </div>
    </div>
  </main>

  <footer class="bg-white p-4 flex justify-between items-center">
    <div>
      <!-- Links to testimonials, FAQs, and social media -->
      <a href="#" class="text-purple-500 mr-4">Testimonials</a>
      <a href="#" class="text-purple-500 mr-4">FAQs</a>
      <a href="#" class="text-purple-500">Social Media</a>
    </div>
    <div>
      <!-- Copyright information -->
      <p class="text-gray-600">&copy; 2022 Real Estate Brokerage</p>
    </div>
  </footer>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Add any custom styles here */
</style>