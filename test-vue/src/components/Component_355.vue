<template>
  <header class="bg-white p-4 flex justify-between items-center">
    <img src="https://picsum.photos/seed/355/300/300" alt="Company Logo" class="h-10">
    <nav>
      <ul class="flex space-x-4">
        <li><a href="#" class="text-gray-600 hover:text-gray-900">Home</a></li>
        <li><a href="#" class="text-gray-600 hover:text-gray-900">About</a></li>
        <li><a href="#" class="text-gray-600 hover:text-gray-900">Services</a></li>
        <li><a href="#" class="text-gray-600 hover:text-gray-900">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main class="py-10">
    <section class="bg-cover bg-center h-screen" style="background-image: url('https://picsum.photos/seed/355/1600/900')">
      <div class="text-center pt-40">
        <h1 class="text-5xl text-white">Welcome to our travel agency</h1>
        <p class="text-xl text-white mt-4">We offer the best deals on flights, hotels, and tours</p>
        <button class="mt-6 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Book Now</button>
      </div>
    </section>

    <!-- Add more sections as needed -->
  </main>

  <footer class="bg-white p-4 text-center">
    <p class="text-gray-600">© 2022 Travel Agency. All rights reserved.</p>
  </footer>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Tailwind CSS is included via CDN in the template */
</style>