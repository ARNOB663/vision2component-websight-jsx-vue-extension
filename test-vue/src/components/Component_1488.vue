<template>
  <div class="bg-gray-100 min-h-screen relative">
    <video autoplay loop muted class="absolute inset-0 w-full h-full object-cover opacity-50">
      <source src="https://static.photos/business/900x600/90.webp" type="video/mp4">
    </video>
    <header class="bg-white p-4">
      <div class="container mx-auto flex justify-between items-center">
        <img src="https://static.photos/business/300x300/90.webp" alt="Logo" class="h-10">
        <nav>
          <ul class="flex space-x-4">
            <li><a href="#" class="text-gray-600 hover:text-gray-900">Home</a></li>
            <li><a href="#" class="text-gray-600 hover:text-gray-900">About</a></li>
            <li><a href="#" class="text-gray-600 hover:text-gray-900">Services</a></li>
            <li><a href="#" class="text-gray-600 hover:text-gray-900">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <main class="container mx-auto p-4 mt-24">
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-1/2 p-4">
          <h2 class="text-2xl font-bold mb-4">Products</h2>
          <!-- Add your products here -->
        </div>
        <div class="w-full md:w-1/2 p-4">
          <h2 class="text-2xl font-bold mb-4">Services</h2>
          <!-- Add your services here -->
        </div>
      </div>
    </main>

    <footer class="bg-white p-4 text-center mt-auto">
      <p class="text-gray-600">© 2022 Tech Company Portal. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
// Your script logic here
</script>

<style scoped>
/* Your scoped styles here */
</style>