<template>
  <header class="flex items-center justify-between bg-white p-4">
    <img src="https://static.photos/business/300x300/84.webp" alt="Company Logo" class="h-10">
    <nav>
      <ul class="flex space-x-4">
        <li><a href="#" class="text-gray-800 hover:text-yellow-500">Home</a></li>
        <li><a href="#" class="text-gray-800 hover:text-yellow-500">About</a></li>
        <li><a href="#" class="text-gray-800 hover:text-yellow-500">Services</a></li>
        <li><a href="#" class="text-gray-800 hover:text-yellow-500">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section class="relative">
      <img src="https://static.photos/business/900x600/85.webp" alt="Hero Image" class="w-full">
      <div class="absolute inset-0 flex items-center justify-center">
        <h1 class="text-5xl text-white">Welcome to Our Tech Company</h1>
      </div>
    </section>

    <section class="py-12 px-4">
      <h2 class="text-3xl text-center">About Us</h2>
      <p class="text-lg text-center mt-4">
        At our tech company, we are dedicated to providing innovative and reliable technology solutions to our clients. Our team of experts is committed to delivering the best possible service, and we are always looking for new ways to improve our products and services. We believe in the power of technology to transform the world, and we are committed to being at the forefront of this revolution.
      </p>
    </section>
  </main>

  <footer class="bg-gray-800 text-white text-center p-4">
    <p>© 2022 Tech Company. All rights reserved.</p>
  </footer>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>