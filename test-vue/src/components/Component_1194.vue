<template>
  <header class="bg-white shadow">
    <nav class="container mx-auto px-6 py-3 flex justify-between">
      <a href="#" class="text-xl font-bold">Travel Agency</a>
      <div class="flex items-center">
        <a href="#" class="px-3 py-2 text-gray-700 hover:text-indigo-500">Destinations</a>
        <a href="#" class="px-3 py-2 text-gray-700 hover:text-indigo-500">About Us</a>
        <a href="#" class="px-3 py-2 text-gray-700 hover:text-indigo-500">Contact</a>
        <a href="#" class="px-3 py-2 text-white bg-indigo-500 hover:bg-indigo-600">Book Now</a>
      </div>
    </nav>
  </header>

  <main class="container mx-auto px-6 py-3">
    <section class="flex flex-col items-center justify-center h-screen">
      <h1 class="text-4xl font-bold mb-4">Welcome to our travel agency</h1>
      <p class="text-xl text-center mb-8">We are a team of travel experts who are passionate about helping you plan your next adventure.</p>
      <div class="relative">
        <input type="text" placeholder="Search destinations" class="px-4 py-2 rounded-full">
        <button class="absolute right-0 top-0 mt-2 mr-2">Search</button>
      </div>
    </section>

    <section class="mt-8">
      <h2 class="text-2xl font-bold mb-4">Featured Destinations</h2>
      <div class="grid grid-cols-3 gap-4">
        <div class="bg-white rounded shadow p-4">
          <img src="https://static.photos/business/900x600/196.webp" alt="Beach" class="w-full h-48 object-cover mb-4">
          <h3 class="text-xl font-bold mb-2">Beach Destination</h3>
          <p class="text-gray-700">Experience the best beaches in the world.</p>
        </div>
        <!-- Add more destinations here -->
      </div>
    </section>
  </main>

  <footer class="bg-white shadow mt-8 py-6">
    <div class="container mx-auto px-6">
      <p class="text-center">© 2022 Travel Agency. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
// Your script logic can go here if needed
</script>