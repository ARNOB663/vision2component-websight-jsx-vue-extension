<template>
  <div class="bg-gray-100">
    <header class="flex justify-center items-center h-64 bg-white">
      <img src="https://static.photos/business/300x300/86.webp" alt="Logo" class="rounded-full">
    </header>

    <nav class="flex justify-center items-center h-16 bg-gray-800 text-white">
      <ul class="flex space-x-4">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>

    <main class="flex flex-col items-center justify-center h-screen">
      <img src="https://static.photos/business/900x600/87.webp" alt="Hero Image" class="w-full h-full object-cover">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        Learn More
      </button>
    </main>

    <footer class="flex justify-center items-center h-16 bg-gray-800 text-white">
      <ul class="flex space-x-4">
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms of Service</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </footer>
  </div>
</template>

<script setup>
// No script needed for this simple template
</script>