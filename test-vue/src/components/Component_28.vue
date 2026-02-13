<template>
  <nav class="bg-white p-6">
    <!-- Menu bar -->
    <ul class="flex space-x-6">
      <li><a href="#" class="text-gray-800 hover:text-gray-600">Home</a></li>
      <li><a href="#" class="text-gray-800 hover:text-gray-600">About</a></li>
      <li><a href="#" class="text-gray-800 hover:text-gray-600">Projects</a></li>
      <li><a href="#" class="text-gray-800 hover:text-gray-600">Contact</a></li>
    </ul>
  </nav>

  <div class="flex p-6">
    <!-- Sidebar -->
    <div class="w-1/4 p-6">
      <h2 class="text-2xl font-bold mb-4">About Us</h2>
      <p class="text-gray-600">
        We are a leading architecture firm specializing in residential and commercial projects. Our team of experienced architects and designers work closely with our clients to create spaces that are not only beautiful but also functional and sustainable.
      </p>
    </div>

    <!-- Main content -->
    <div class="w-3/4 p-6">
      <h1 class="text-3xl font-bold mb-4">Our Past Projects</h1>
      <!-- Masonry style grid -->
      <div class="grid grid-cols-2 gap-4">
        <img src="https://picsum.photos/seed/28/900/600" alt="Architecture">
        <img src="https://picsum.photos/seed/28/900/600" alt="Interior">
        <img src="https://picsum.photos/seed/28/900/600" alt="Exterior">
        <img src="https://picsum.photos/seed/28/900/600" alt="Urban">
      </div>
    </div>
  </div>

  <footer class="bg-white p-6">
    <!-- Contact form and newsletter sign-up -->
    <form class="mb-4">
      <input type="email" placeholder="Enter your email" class="p-2 border border-gray-300 rounded">
      <button type="submit" class="bg-red-500 text-white p-2 rounded">Subscribe</button>
    </form>
    <p class="text-gray-600">© 2022 Architecture Firm. All rights reserved.</p>
  </footer>
</template>

<script setup>
// No script needed for this example
</script>