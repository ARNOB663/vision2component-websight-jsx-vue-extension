<template>
  <header class="flex justify-center items-center h-64 bg-red-500 text-white">
    <img src="https://static.photos/health/300x300/85.webp" alt="Healthcare Logo" class="h-32">
  </header>
  <nav class="flex justify-center items-center h-16 bg-red-400 text-white">
    <ul class="flex space-x-4">
      <li><a href="#">Home</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">About Us</a></li>
      <li><a href="#">Contact Us</a></li>
    </ul>
  </nav>
  <main class="flex flex-col items-center justify-center h-screen p-4">
    <h1 class="text-4xl mb-4">Welcome to Our Healthcare Provider</h1>
    <p class="text-center mb-4">We are a team of healthcare professionals dedicated to providing the highest quality care to our patients. Our experienced staff is committed to providing personalized care and ensuring that you receive the best possible service.</p>
    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
      Book an Appointment
    </button>
  </main>
</template>

<script setup>
// No script needed for this example
</script>