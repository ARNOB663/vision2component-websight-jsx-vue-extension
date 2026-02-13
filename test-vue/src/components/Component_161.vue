<template>
  <div class="flex flex-col min-h-screen bg-gray-100 font-sans leading-normal tracking-normal">
    <header class="bg-white shadow">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="#" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src="https://picsum.photos/seed/161/300/300" alt="Logo" class="w-10 h-10">
          <span class="ml-3 text-xl">Media Company</span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="#" class="mr-5 hover:text-gray-900">News</a>
          <a href="#" class="mr-5 hover:text-gray-900">Videos</a>
          <a href="#" class="mr-5 hover:text-gray-900">About</a>
          <a href="#" class="mr-5 hover:text-gray-900">Contact</a>
        </nav>
      </div>
    </header>
    <main class="flex-grow">
      <div class="container mx-auto px-5 py-24">
        <h1 class="text-3xl font-bold mb-4">Latest News and Videos</h1>
        <!-- Add your news and video content here -->
      </div>
    </main>
    <footer class="bg-white">
      <div class="container mx-auto px-5 py-6">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-sm text-gray-500">© 2022 Media Company</p>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-500 hover:text-gray-900">Facebook</a>
            <a href="#" class="text-gray-500 hover:text-gray-900">Twitter</a>
            <a href="#" class="text-gray-500 hover:text-gray-900">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Your script logic here
</script>