<template>
  <div class="bg-gray-800 text-white min-h-screen flex flex-col">
    <header class="flex justify-center items-center py-16">
      <video autoplay loop muted class="w-full max-w-5xl">
        <source src="https://static.photos/business/900x600/8.webp" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </header>
    <nav class="flex justify-center py-4 bg-black">
      <ul class="flex space-x-4">
        <li><a href="#" class="text-white hover:text-gray-300">Home</a></li>
        <li><a href="#" class="text-white hover:text-gray-300">News</a></li>
        <li><a href="#" class="text-white hover:text-gray-300">Videos</a></li>
        <li><a href="#" class="text-white hover:text-gray-300">Social</a></li>
      </ul>
    </nav>
    <main class="flex flex-wrap justify-center gap-8 p-8">
      <section class="w-full md:w-1/3">
        <h2 class="text-2xl font-bold mb-4">Latest News</h2>
        <!-- News articles will go here -->
      </section>
      <section class="w-full md:w-1/3">
        <h2 class="text-2xl font-bold mb-4">Featured Videos</h2>
        <!-- Featured videos will go here -->
      </section>
      <section class="w-full md:w-1/3">
        <h2 class="text-2xl font-bold mb-4">Social Media Feeds</h2>
        <!-- Social media feeds will go here -->
      </section>
    </main>
  </div>
</template>

<script setup>
// Your script logic will go here
</script>

<style scoped>
/* Your custom styles will go here */
</style>