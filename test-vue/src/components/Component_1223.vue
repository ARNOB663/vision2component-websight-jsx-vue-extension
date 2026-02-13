<template>
  <div class="bg-red-100">
    <header class="flex flex-col items-center justify-center h-screen text-white bg-gradient-to-r from-orange-500 to-red-500">
      <h1 class="text-4xl font-bold">E-Learning Platform</h1>
      <p class="mt-3 text-xl">
        Welcome to our e-learning platform, where you can learn from the best. Our courses are designed to help you reach your goals.
      </p>
      <button class="px-4 py-2 mt-5 font-bold text-white bg-red-500 rounded hover:bg-red-700">
        Start Learning Now
      </button>
    </header>

    <nav class="flex items-center justify-center p-6 space-x-4 bg-red-500">
      <a href="#" class="text-white hover:text-red-200">Home</a>
      <a href="#" class="text-white hover:text-red-200">Courses</a>
      <a href="#" class="text-white hover:text-red-200">About Us</a>
      <a href="#" class="text-white hover:text-red-200">Contact</a>
    </nav>

    <section class="p-6 text-center">
      <h2 class="text-2xl font-bold">Popular Courses</h2>
      <!-- Add your course cards here -->
    </section>

    <footer class="p-6 text-center bg-red-500 text-white">
      <p>&copy; 2022 E-Learning Platform. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
// Your script logic here
</script>

<style scoped>
/* Your scoped styles here */
</style>