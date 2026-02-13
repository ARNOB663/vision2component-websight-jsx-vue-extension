<template>
  <header class="bg-cover bg-center h-screen flex items-center justify-center" :style="{ backgroundImage: 'url(https://static.photos/technology/1600x900/96.webp)' }">
    <nav class="bg-white bg-opacity-75 w-full px-6 py-4">
      <div class="flex items-center justify-between">
        <div>
          <a href="#" class="text-xl text-gray-800 font-bold">Technology Company</a>
        </div>
        <div>
          <a href="#" class="text-gray-800 hover:text-red-500 px-3 py-2 rounded">Home</a>
          <a href="#" class="text-gray-800 hover:text-red-500 px-3 py-2 rounded">About</a>
          <a href="#" class="text-gray-800 hover:text-red-500 px-3 py-2 rounded">Services</a>
          <a href="#" class="text-gray-800 hover:text-red-500 px-3 py-2 rounded">Contact</a>
        </div>
      </div>
    </nav>
  </header>
  <main class="container mx-auto px-4 py-6">
    <h1 class="text-4xl text-center">Welcome to Technology Company</h1>
    <p class="text-xl text-center my-6">
      At Technology Company, we are dedicated to providing innovative and reliable technology solutions to meet your business needs. Our team of experts is committed to delivering high-quality products and services that exceed your expectations. Whether you're looking for software development, IT consulting, or cloud solutions, we're here to help.
    </p>
  </main>
  <footer class="bg-gray-800 text-white py-6">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between">
        <div>
          <p>© 2022 Technology Company. All rights reserved.</p>
        </div>
        <div class="flex items-center">
          <a href="#" class="text-white hover:text-red-300 px-3">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="#" class="text-white hover:text-red-400 px-3">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="text-white hover:text-red-500 px-3">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No script needed for this example
</script>