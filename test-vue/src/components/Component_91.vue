<template>
  <header class="bg-white p-4 flex justify-between items-center">
    <img src="https://picsum.photos/seed/91/300/300" alt="Logo" class="h-10">
    <nav>
      <ul class="flex space-x-4">
        <li><a href="#" class="text-gray-600 hover:text-gray-800">Home</a></li>
        <li><a href="#" class="text-gray-600 hover:text-gray-800">Packages</a></li>
        <li><a href="#" class="text-gray-600 hover:text-gray-800">About</a></li>
        <li><a href="#" class="text-gray-600 hover:text-gray-800">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main class="py-8">
    <div class="w-full h-96 bg-cover bg-center" style="background-image: url('https://picsum.photos/seed/91/1600/900')"></div>
    <!-- Carousel of travel packages goes here -->
  </main>

  <footer class="bg-white p-4 flex justify-between items-center">
    <div>
      <p class="text-gray-600">© 2022 Travel Agency. All rights reserved.</p>
    </div>
    <div class="flex space-x-4">
      <a href="#" class="text-gray-600 hover:text-gray-800">Facebook</a>
      <a href="#" class="text-gray-600 hover:text-gray-800">Twitter</a>
      <a href="#" class="text-gray-600 hover:text-gray-800">Instagram</a>
    </div>
  </footer>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Tailwind CSS is included via CDN in the template */
</style>