<template>
  <header class="fixed w-full bg-white shadow-md">
    <div class="container mx-auto flex justify-between items-center p-4">
      <img src="https://static.photos/architecture/300x300/88.webp" alt="Logo" class="h-10">
      <nav>
        <ul class="flex space-x-4">
          <li><a href="#" class="text-gray-600 hover:text-gray-900">Home</a></li>
          <li><a href="#" class="text-gray-600 hover:text-gray-900">About</a></li>
          <li><a href="#" class="text-gray-600 hover:text-gray-900">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main class="container mx-auto pt-24 pb-10">
    <section class="flex flex-col md:flex-row items-center">
      <img src="https://static.photos/architecture/900x600/89.webp" alt="Architecture" class="w-full md:w-1/2">
      <div class="w-full md:w-1/2 p-4">
        <h2 class="text-2xl mb-2">Welcome to our Architecture Firm</h2>
        <p class="text-gray-600">
          We are a full-service architecture firm specializing in residential, commercial, and institutional design. Our team of experienced architects and designers work closely with our clients to create spaces that are not only beautiful, but also functional and sustainable. We believe in the power of design to transform the world around us, and we are committed to making that a reality.
        </p>
      </div>
    </section>
  </main>

  <footer class="bg-gray-800 text-white p-4">
    <div class="container mx-auto flex justify-between">
      <p>© 2022 Architecture Firm</p>
      <p>Contact: info@architecturefirm.com</p>
    </div>
  </footer>
</template>

<script setup>
// No script needed for this example
</script>