<template>
  <div class="flex flex-col min-h-screen bg-gray-100 font-sans leading-normal tracking-normal">
    <header class="bg-white">
      <nav class="flex items-center justify-between flex-wrap p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <span class="font-semibold text-xl tracking-tight">Art Gallery</span>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Home
            </a>
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              About
            </a>
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
    <main class="flex-grow">
      <div class="w-full bg-cover bg-center h-96" style="background-image: url('https://static.photos/art/1600x900/57.webp')"></div>
      <div class="container mx-auto px-4 py-12">
        <h1 class="text-4xl font-bold mb-4">Welcome to our Art Gallery</h1>
        <p class="text-lg mb-8">
          At our Art Gallery, we specialize in the finest artworks from around the world. Our collection is diverse and includes paintings, sculptures, and more. We pride ourselves on providing a unique and engaging experience for our visitors. Whether you're a seasoned collector or a beginner, we hope you'll find something that speaks to your soul.
        </p>
      </div>
    </main>
    <footer class="bg-gray-800 text-white text-center py-8">
      <p>© 2022 Art Gallery. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
// Your script logic here if needed
</script>

<style scoped>
/* Add any scoped styles here */
</style>