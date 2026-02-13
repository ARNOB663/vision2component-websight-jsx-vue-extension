<template>
  <div class="flex flex-col min-h-screen">
    <header class="bg-cover bg-center h-64 flex items-center justify-center" :style="{ backgroundImage: 'url(https://static.photos/business/1600x900/128.webp)' }">
      <img src="https://static.photos/business/300x300/129.webp" alt="Logo" class="w-32">
    </header>
    <nav class="bg-gray-800 text-white p-4">
      <ul class="flex space-x-4">
        <li><a href="#" class="text-white hover:text-purple-300">Home</a></li>
        <li><a href="#" class="text-white hover:text-purple-300">About</a></li>
        <li><a href="#" class="text-white hover:text-purple-300">Services</a></li>
        <li><a href="#" class="text-white hover:text-purple-300">Contact</a></li>
      </ul>
    </nav>
    <main class="flex-grow p-4">
      <h1 class="text-4xl text-center my-8">Welcome to Our Tech Company</h1>
      <p class="text-lg text-justify">
        At our tech company, we are dedicated to providing the best in technology solutions. We specialize in a wide range of services, from software development to cybersecurity, and everything in between. Our team of experts is committed to delivering high-quality, reliable solutions that meet and exceed our clients' expectations. Whether you're a small business or a large corporation, we're here to help you leverage the power of technology to achieve your goals.
      </p>
    </main>
    <footer class="bg-gray-800 text-white text-center p-4">
      &copy; 2022 Tech Company. All rights reserved.
    </footer>
  </div>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Add any custom styles here */
</style>