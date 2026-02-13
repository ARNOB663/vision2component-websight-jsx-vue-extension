<template>
  <div class="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover bg-center" :style="{ backgroundImage: 'url(\'https://static.photos/architecture/1600x900/123.webp\')' }">
    <header class="bg-white shadow">
      <div class="container mx-auto flex flex-col items-center px-4 py-12 md:flex-row">
        <h1 class="mb-4 text-4xl font-bold text-gray-800 md:mb-0 md:mr-4 md:text-5xl">Architecture Firm</h1>
        <h2 class="text-2xl text-gray-600 md:text-3xl">Modern and sophisticated design</h2>
      </div>
    </header>

    <nav class="container mx-auto px-4 py-4">
      <ul class="flex flex-wrap items-center text-xl text-gray-700">
        <li><a href="#" class="mr-6">Home</a></li>
        <li><a href="#" class="mr-6">About</a></li>
        <li><a href="#" class="mr-6">Portfolio</a></li>
        <li><a href="#" class="mr-6">Services</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </nav>

    <main class="container mx-auto px-4 py-12">
      <div class="flex flex-wrap -mx-4">
        <div class="w-full md:w-1/3 px-4 mb-8">
          <!-- Project thumbnails and titles -->
        </div>
        <div class="w-full md:w-2/3 px-4 mb-8">
          <!-- Project information -->
        </div>
      </div>
    </main>

    <footer class="bg-gray-800 text-white text-center p-4">
      <!-- Social media links and contact form -->
    </footer>
  </div>
</template>

<script setup>
// Your script logic here
</script>

<style scoped>
/* Your scoped styles here */
</style>