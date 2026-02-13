<template>
  <header class="w-full h-64 bg-cover bg-center" :style="{ backgroundImage: 'url(https://static.photos/travel/1600x900/119.webp)' }">
    <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-xl tracking-tight">Travel Agency</span>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Home
          </a>
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            About
          </a>
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </nav>
  </header>
  <main class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-4">Welcome to our Travel Agency</h1>
    <p class="mb-4">
      At our travel agency, we specialize in creating unforgettable travel experiences for our clients. We understand that every traveler is unique and we strive to provide personalized service that meets their individual needs and preferences. Whether you're planning a romantic getaway, a family vacation, a business trip, or a solo adventure, we're here to help you plan your next adventure.
    </p>
    <!-- Add more sections as needed -->
  </main>
  <footer class="bg-gray-800 text-white p-4">
    <p class="text-center">© 2022 Travel Agency. All rights reserved.</p>
  </footer>
</template>

<script setup>
// No script setup needed for this example
</script>

<style scoped>
/* Add any scoped styles if needed */
</style>