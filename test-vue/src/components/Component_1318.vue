<template>
  <div class="flex flex-col min-h-screen bg-gray-100 font-sans leading-normal tracking-normal">
    <header class="bg-white shadow">
      <div class="container mx-auto flex justify-between items-center px-6 py-4">
        <h1 class="text-xl font-bold">Tech Company</h1>
        <div class="relative">
          <img src="https://static.photos/fashion/900x600/120.webp" alt="Cart" class="h-6 w-6">
          <span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">0</span>
        </div>
      </div>
    </header>
    <main class="container mx-auto flex-grow px-6 py-4">
      <img src="https://static.photos/fashion/900x600/121.webp" alt="Main Product" class="w-full h-64 object-cover mb-4">
      <div class="flex flex-wrap -mx-2 overflow-hidden">
        <div class="my-2 px-2 w-full md:w-1/3">
          <div class="bg-white rounded overflow-hidden shadow">
            <img src="https://static.photos/fashion/900x600/122.webp" alt="Laptops" class="w-full">
            <div class="px-6 py-4">
              <h2 class="text-xl font-bold mb-2">Laptops</h2>
              <p class="text-gray-700 text-base">
                Discover our wide range of high-performance laptops. Whether you're a gamer, a student, or a professional, we have the perfect laptop for you.
              </p>
            </div>
          </div>
        </div>
        <div class="my-2 px-2 w-full md:w-1/3">
          <div class="bg-white rounded overflow-hidden shadow">
            <img src="https://static.photos/fashion/900x600/123.webp" alt="Phones" class="w-full">
            <div class="px-6 py-4">
              <h2 class="text-xl font-bold mb-2">Phones</h2>
              <p class="text-gray-700 text-base">
                Experience the future of mobile with our cutting-edge smartphones. Whether you're on the go or at home, our phones are designed to meet your needs.
              </p>
            </div>
          </div>
        </div>
        <div class="my-2 px-2 w-full md:w-1/3">
          <div class="bg-white rounded overflow-hidden shadow">
            <img src="https://static.photos/fashion/900x600/124.webp" alt="Accessories" class="w-full">
            <div class="px-6 py-4">
              <h2 class="text-xl font-bold mb-2">Accessories</h2>
              <p class="text-gray-700 text-base">
                Upgrade your tech setup with our top-notch accessories. From chargers and cables to cases and screen protectors, we have everything you need to make your tech experience even better.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer class="bg-white shadow">
      <div class="container mx-auto px-6 py-4">
        <p class="text-center text-gray-700">
          &copy; 2022 Tech Company. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Your script setup logic here
</script>

<style scoped>
/* Your scoped styles here */
</style>