<template>
  <header class="w-full">
    <img src="https://static.photos/architecture/900x600/167.webp" alt="Architecture" class="w-full">
  </header>

  <nav class="bg-gray-800 text-white p-4">
    <ul class="flex space-x-4 justify-center">
      <li><a href="#" class="hover:text-gray-400">Home</a></li>
      <li><a href="#" class="hover:text-gray-400">Portfolio</a></li>
      <li><a href="#" class="hover:text-gray-400">Contact</a></li>
    </ul>
  </nav>

  <main class="py-8">
    <h1 class="text-4xl text-center font-bold mb-8">Welcome to Our Architecture Firm</h1>

    <p class="text-center mb-8">
      We are a full-service architecture firm specializing in residential, commercial, and institutional design. Our team of experienced architects and designers work closely with our clients to create spaces that are not only beautiful, but also functional and sustainable.
    </p>

    <div class="grid grid-cols-2 gap-4">
      <div class="hover:opacity-75">
        <img src="https://static.photos/architecture/900x600/168.webp" alt="Building" class="w-full">
        <h2 class="text-2xl font-bold mt-4">Building Project</h2>
      </div>
      <!-- Add more portfolio items here -->
    </div>
  </main>

  <footer class="bg-gray-800 text-white p-4">
    <div class="flex justify-between">
      <div>
        <h2 class="text-2xl font-bold mb-4">Contact Us</h2>
        <p>123 Main St</p>
        <p>Anytown, USA 12345</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: info@architecturefirm.com</p>
      </div>
      <!-- Add map and contact form here -->
    </div>
  </footer>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Add any custom styles here */
</style>