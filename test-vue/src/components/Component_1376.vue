<template>
  <div class="relative bg-gray-100 min-h-screen">
    <img src="https://static.photos/education/900x600/178.webp" alt="Student in action" class="w-full h-64 object-cover">
    <div class="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
      Welcome to our e-learning platform
    </div>
  </div>
  <nav class="bg-gray-500 text-white p-4">
    <ul class="flex space-x-4 justify-center">
      <li><a href="#">Home</a></li>
      <li><a href="#">Courses</a></li>
      <li><a href="#">About Us</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
  <div class="container mx-auto p-4">
    <h2 class="text-2xl font-bold mb-4">Our Courses</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div class="bg-white p-4 rounded shadow">
        <h3 class="text-xl font-bold mb-2">Course 1</h3>
        <p>This course is designed to provide a comprehensive understanding of the subject matter. It covers all the key concepts and provides practical examples to help you understand the material.</p>
      </div>
      <div class="bg-white p-4 rounded shadow">
        <h3 class="text-xl font-bold mb-2">Course 2</h3>
        <p>This course is designed to provide a comprehensive understanding of the subject matter. It covers all the key concepts and provides practical examples to help you understand the material.</p>
      </div>
      <div class="bg-white p-4 rounded shadow">
        <h3 class="text-xl font-bold mb-2">Course 3</h3>
        <p>This course is designed to provide a comprehensive understanding of the subject matter. It covers all the key concepts and provides practical examples to help you understand the material.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// No script needed for this example
</script>