<template>
  <div class="bg-gray-100">
    <header class="flex justify-center items-center h-64 bg-white">
      <img src="https://static.photos/business/300x300/156.webp" alt="Logo" class="h-24">
    </header>

    <nav class="flex justify-center items-center h-16 bg-gray-800 text-white">
      <ul class="flex space-x-4">
        <li><a href="#" class="hover:text-gray-300">Home</a></li>
        <li><a href="#" class="hover:text-gray-300">About</a></li>
        <li><a href="#" class="hover:text-gray-300">Services</a></li>
        <li><a href="#" class="hover:text-gray-300">Contact</a></li>
      </ul>
    </nav>

    <main class="flex flex-col items-center p-8 space-y-8">
      <section class="flex flex-col items-center space-y-4 bg-white p-8 w-full max-w-2xl">
        <h2 class="text-2xl">Section 1</h2>
        <p class="text-center">This is the first section of our website. It's designed to provide information about our company and its services.</p>
        <button class="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
          Learn More
        </button>
      </section>

      <section class="flex flex-col items-center space-y-4 bg-gray-800 text-white p-8 w-full max-w-2xl">
        <h2 class="text-2xl">Section 2</h2>
        <p class="text-center">This is the second section of our website. It's designed to provide more detailed information about our services and how we can help you.</p>
        <button class="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
          Learn More
        </button>
      </section>
    </main>

    <footer class="flex justify-center items-center h-32 bg-gray-800 text-white">
      <p>Footer content goes here</p>
    </footer>
  </div>
</template>

<script setup>
// Your script logic here
</script>

<style scoped>
/* Your scoped styles here */
</style>