<template>
  <div class="flex flex-col min-h-screen">
    <header class="bg-cover bg-center h-64" :style="{ backgroundImage: 'url(https://static.photos/business/1600x900/35.webp)' }">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <img src="https://static.photos/business/300x300/36.webp" alt="Logo" class="w-10 h-10">
          <span class="ml-3 text-xl">Food Blog</span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="#" class="mr-5 text-white">Home</a>
          <a href="#" class="mr-5 text-white">About</a>
          <a href="#" class="mr-5 text-white">Contact</a>
        </nav>
      </div>
    </header>
    <main class="flex-grow container mx-auto px-5 py-6 flex flex-col md:flex-row">
      <section class="w-full md:w-2/3 flex flex-col items-start">
        <h2 class="text-3xl mb-4">Blog Posts</h2>
        <!-- Blog posts go here -->
      </section>
      <aside class="w-full md:w-1/3 flex flex-col items-start mt-6 md:mt-0">
        <h2 class="text-3xl mb-4">Recent News</h2>
        <!-- Recent news goes here -->
        <h2 class="text-3xl mb-4 mt-6">Archives</h2>
        <!-- Archives go here -->
      </aside>
    </main>
    <footer class="bg-gray-800 text-white text-center py-6">
      <p>© 2022 Food Blog. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
// Your script logic can go here if needed
</script>

<style scoped>
/* Add any scoped styles here */
</style>