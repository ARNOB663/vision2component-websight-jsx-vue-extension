<template>
  <div class="flex flex-col min-h-screen bg-gray-100 font-sans leading-normal tracking-normal">
    <header class="bg-white">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="#" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src="https://static.photos/architecture/300x300/127.webp" alt="Company Logo" class="w-10 h-10">
          <span class="ml-3 text-xl">Architecture Firm</span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="#" class="mr-5 hover:text-gray-900">Home</a>
          <a href="#" class="mr-5 hover:text-gray-900">About</a>
          <a href="#" class="mr-5 hover:text-gray-900">Portfolio</a>
          <a href="#" class="mr-5 hover:text-gray-900">Contact</a>
        </nav>
      </div>
    </header>
    <main class="flex-grow">
      <div class="container mx-auto px-5 py-24">
        <div class="flex flex-wrap -m-4">
          <div class="p-4 md:w-1/3">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://static.photos/architecture/900x600/128.webp" alt="Architecture Project">
            </div>
          </div>
          <!-- More portfolio items here -->
        </div>
      </div>
    </main>
    <footer class="bg-white">
      <div class="container mx-auto px-5 py-6">
        <p class="text-sm text-gray-400 text-center">© 2022 Architecture Firm. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// No script needed for this basic template
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>