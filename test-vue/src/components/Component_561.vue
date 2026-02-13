<template>
  <header class="bg-cover bg-center h-screen" :style="{ backgroundImage: 'url(https://static.photos/art/1600x900/162.webp)' }">
    <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-xl tracking-tight">Non-Profit Organization</span>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a href="#stories" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Stories</a>
          <a href="#impact" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Impact</a>
          <a href="#opportunities" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">Opportunities</a>
        </div>
      </div>
    </nav>
    <div class="text-center pt-40">
      <h1 class="text-4xl text-white font-bold">Our Mission</h1>
      <p class="text-xl text-white mt-4">We are a non-profit organization dedicated to making a difference in the world. We believe in the power of community and strive to create a better world for all.</p>
    </div>
  </header>
  <main class="container mx-auto p-6">
    <section id="stories" class="my-12">
      <h2 class="text-3xl">Stories</h2>
      <!-- Add your stories here -->
    </section>
    <section id="impact" class="my-12">
      <h2 class="text-3xl">Impact</h2>
      <!-- Add your impact here -->
    </section>
    <section id="opportunities" class="my-12">
      <h2 class="text-3xl">Opportunities</h2>
      <!-- Add your opportunities here -->
    </section>
  </main>
  <footer class="bg-gray-800 text-white p-6">
    <!-- Add your footer content here -->
  </footer>
</template>

<script setup>
// Your script logic here
</script>

<style scoped>
/* Your scoped styles here */
</style>