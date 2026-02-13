<template>
  <header class="bg-white shadow">
    <div class="container mx-auto px-6 py-3 flex justify-between">
      <div class="flex items-center">
        <img src="https://static.photos/business/300x300/89.webp" alt="Logo" class="h-10">
        <input type="text" placeholder="Search..." class="ml-4 px-2 py-1 border rounded">
      </div>
      <nav>
        <ul class="flex">
          <li class="mr-6"><a href="#" class="text-gray-600 hover:text-gray-900">Home</a></li>
          <li class="mr-6"><a href="#" class="text-gray-600 hover:text-gray-900">Blog</a></li>
          <li><a href="#" class="text-gray-600 hover:text-gray-900">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main class="container mx-auto px-6 py-3">
    <section class="mb-6">
      <img src="https://static.photos/business/900x600/90.webp" alt="Hero Image" class="w-full h-64 object-cover">
    </section>

    <section class="mb-6">
      <h2 class="text-2xl mb-3">Latest Posts</h2>
      <div class="flex">
        <div class="w-2/3 mr-6">
          <!-- Latest blog posts go here -->
        </div>
        <aside class="w-1/3">
          <!-- Sidebar content goes here -->
        </aside>
      </div>
    </section>
  </main>

  <footer class="bg-white shadow mt-6 py-6">
    <div class="container mx-auto px-6">
      <p class="text-center text-gray-600">&copy; 2022 Food Company. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
// Your script logic goes here
</script>

<style scoped>
/* Your scoped styles go here */
</style>