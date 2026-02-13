<template>
  <div class="bg-gray-100">
    <header class="bg-gray-500 text-white p-4">
      <h1 class="text-2xl font-bold">Education Site</h1>
      <nav class="mt-4">
        <ul class="flex space-x-4">
          <li><a href="#" class="hover:underline">Home</a></li>
          <li><a href="#" class="hover:underline">About</a></li>
          <li><a href="#" class="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>

    <main class="container mx-auto p-4">
      <div class="flex flex-wrap -mx-4">
        <div class="w-full md:w-1/3 px-4">
          <h2 class="text-xl font-bold mb-4">Articles</h2>
          <!-- Article content goes here -->
        </div>
        <div class="w-full md:w-1/3 px-4">
          <h2 class="text-xl font-bold mb-4">Resources</h2>
          <!-- Resource content goes here -->
        </div>
        <div class="w-full md:w-1/3 px-4">
          <h2 class="text-xl font-bold mb-4">Popular Content</h2>
          <!-- Popular content goes here -->
        </div>
      </div>
    </main>

    <footer class="bg-gray-500 text-white p-4">
      <p class="text-center">© 2022 Education Site. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
// No script needed for this basic structure
</script>