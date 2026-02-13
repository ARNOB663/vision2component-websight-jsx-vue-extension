<template>
  <header class="fixed top-0 w-full">
    <nav class="flex justify-between items-center p-4">
      <img src="https://picsum.photos/seed/191/300/300" alt="Logo" class="h-10">
      <div class="flex space-x-4">
        <a href="#" class="hover:text-gray-300">Home</a>
        <a href="#" class="hover:text-gray-300">About</a>
        <a href="#" class="hover:text-gray-300">Services</a>
        <a href="#" class="hover:text-gray-300">Contact</a>
      </div>
      <div class="flex space-x-4">
        <a href="#"><img src="https://picsum.photos/seed/191/900/600" alt="Facebook" class="h-6"></a>
        <a href="#"><img src="https://picsum.photos/seed/191/900/600" alt="Twitter" class="h-6"></a>
        <a href="#"><img src="https://picsum.photos/seed/191/900/600" alt="Instagram" class="h-6"></a>
      </div>
    </nav>
  </header>

  <main class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-4xl font-bold mb-4">Welcome to Our Tech Startup</h1>
    <p class="text-center max-w-lg mb-8">
      At our tech startup, we are dedicated to providing innovative and cutting-edge solutions to our clients. Our team of experts is committed to delivering high-quality products and services that meet the needs of our clients.
    </p>
    <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
      Learn More
    </button>
  </main>

  <footer class="fixed bottom-0 w-full bg-gray-800 p-4 text-center">
    <p>© 2022 Tech Startup. All rights reserved.</p>
  </footer>
</template>

<script setup>
// No script needed for this example
</script>