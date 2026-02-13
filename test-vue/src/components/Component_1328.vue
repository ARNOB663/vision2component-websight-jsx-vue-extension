<template>
  <div class="flex flex-col md:flex-row min-h-screen">
    <aside class="bg-white w-full md:w-60">
      <nav class="px-4 py-6">
        <ul>
          <li><a href="#" class="text-red-500 hover:text-red-700">Home</a></li>
          <li><a href="#" class="text-red-500 hover:text-red-700">About</a></li>
          <li><a href="#" class="text-red-500 hover:text-red-700">Contact</a></li>
        </ul>
      </nav>
    </aside>
    <main class="flex-1 p-4">
      <div class="bg-cover bg-center h-64" :style="{ backgroundImage: 'url(https://static.photos/people/1600x900/129.webp)' }">
        <div class="flex items-center justify-center h-full text-white text-center text-3xl">
          <h1 class="bg-black bg-opacity-50 p-4">Join our mission to make a difference</h1>
        </div>
      </div>
      <div class="my-8">
        <h2 class="text-2xl mb-4">About Us</h2>
        <p class="text-gray-700">
          We are a non-profit organization dedicated to making a difference in the world. We believe in the power of community and strive to create a world where everyone has the opportunity to thrive. We are committed to using our skills and resources to make a positive impact in our community and beyond.
        </p>
      </div>
    </main>
  </div>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Add any additional styles here if needed */
</style>