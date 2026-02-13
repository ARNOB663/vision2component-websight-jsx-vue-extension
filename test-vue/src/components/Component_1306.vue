<template>
  <header class="bg-white p-4 flex justify-between items-center">
    <img src="https://static.photos/architecture/300x300/108.webp" alt="Company Logo" class="h-10">
    <nav>
      <ul class="flex space-x-4">
        <li><a href="#" class="text-gray-600 hover:text-gray-800">Home</a></li>
        <li><a href="#" class="text-gray-600 hover:text-gray-800">About</a></li>
        <li><a href="#" class="text-gray-600 hover:text-gray-800">Services</a></li>
        <li><a href="#" class="text-gray-600 hover:text-gray-800">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main class="mt-8">
    <section class="relative">
      <img src="https://static.photos/architecture/900x600/109.webp" alt="Architectural Design" class="w-full h-96 object-cover">
      <div class="absolute inset-0 flex items-center justify-center">
        <h1 class="text-white text-4xl font-bold">Welcome to Our Architecture Firm</h1>
      </div>
    </section>

    <section class="mt-8 px-4">
      <h2 class="text-2xl font-bold">About Us</h2>
      <p class="mt-4">
        We are a leading architecture firm specializing in creating unique and innovative designs. Our team of experienced architects and designers work closely with our clients to understand their needs and translate them into beautiful, functional spaces. We believe in the power of design to transform the world and we are committed to making a difference in the world of architecture.
      </p>
    </section>
  </main>

  <footer class="bg-gray-800 text-white p-4 mt-8">
    <p>© 2022 Architecture Firm. All rights reserved.</p>
  </footer>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>