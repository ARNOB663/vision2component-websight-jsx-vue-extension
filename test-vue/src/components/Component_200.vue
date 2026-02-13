<template>
  <header class="sticky top-0 bg-white">
    <div class="container mx-auto px-4 flex items-center justify-between py-6">
      <img src="https://picsum.photos/seed/200/300/300" alt="Logo" class="h-10">
      <nav>
        <ul class="flex space-x-4">
          <li><a href="#" class="text-gray-600 hover:text-gray-900">Home</a></li>
          <li><a href="#" class="text-gray-600 hover:text-gray-900">About</a></li>
          <li><a href="#" class="text-gray-600 hover:text-gray-900">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main class="container mx-auto px-4 py-12">
    <div class="flex flex-wrap -mx-4">
      <div class="w-full md:w-2/3 px-4">
        <!-- News articles go here -->
      </div>
      <div class="w-full md:w-1/3 px-4">
        <!-- Sidebar goes here -->
      </div>
    </div>
  </main>

  <footer class="bg-white">
    <div class="container mx-auto px-4 py-6">
      <p class="text-gray-600 text-center">© 2022 News and Media. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Tailwind CSS is included via CDN in the template */
</style>