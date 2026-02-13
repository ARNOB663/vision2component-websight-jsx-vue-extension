<template>
  <div class="flex flex-col min-h-screen bg-gray-100 font-sans leading-normal tracking-normal">
    <header class="bg-white">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="#" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span class="ml-3 text-xl">Architecture Firm</span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="#" class="mr-5 hover:text-gray-900">Home</a>
          <a href="#" class="mr-5 hover:text-gray-900">About</a>
          <a href="#" class="mr-5 hover:text-gray-900">Projects</a>
          <a href="#" class="mr-5 hover:text-gray-900">Contact</a>
        </nav>
      </div>
    </header>
    <main class="flex-grow">
      <section class="w-full bg-cover bg-center h-96" :style="{ backgroundImage: 'url(https://picsum.photos/seed/238/1600/900)' }">
        <div class="container mx-auto px-4 h-full flex items-center justify-center">
          <h1 class="text-5xl text-white leading-tight">
            We are a full-service architecture firm specializing in residential, commercial, and industrial projects.
          </h1>
        </div>
      </section>
    </main>
    <footer class="bg-white">
      <div class="container mx-auto px-4 py-6">
        <p class="text-gray-600 text-center">
          &copy; 2022 Architecture Firm. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// No script needed for this example
</script>