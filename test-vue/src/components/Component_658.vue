<template>
  <div class="bg-gray-100">
    <div class="container mx-auto px-4 py-8">
      <header class="flex justify-between items-center">
        <img src="https://static.photos/cars/300x300/60.webp" alt="Company Logo" class="h-10">
        <nav>
          <ul class="flex space-x-4">
            <li><a href="#" class="text-gray-800 hover:text-red-500">Home</a></li>
            <li><a href="#" class="text-gray-800 hover:text-red-500">About</a></li>
            <li><a href="#" class="text-gray-800 hover:text-red-500">Services</a></li>
            <li><a href="#" class="text-gray-800 hover:text-red-500">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main class="mt-8">
        <section class="flex flex-col items-center">
          <img src="https://static.photos/cars/900x600/61.webp" alt="Car Image" class="w-full h-64 object-cover">
          <button class="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Get a Quote
          </button>
        </section>
      </main>

      <footer class="mt-8 text-center text-gray-600">
        <p>© 2022 Automotive Insurance Company. All rights reserved.</p>
      </footer>
    </div>
  </div>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>