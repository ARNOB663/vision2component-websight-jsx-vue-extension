<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">Tech Company</span>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a href="#features" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Features
        </a>
        <a href="#blog" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
          Blog
        </a>
      </div>
    </div>
  </nav>

  <section class="text-gray-700 p-8 flex flex-col items-center justify-center">
    <img src="https://picsum.photos/seed/149/900/600" alt="Latest Product" class="w-1/2 mb-8">
    <h1 class="text-4xl font-bold mb-8">Welcome to our Tech Company</h1>
    <p class="text-center mb-8">We are a leading provider of cutting-edge technology solutions. Our team of experts is dedicated to delivering the best possible products and services to our clients.</p>
    <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
      Learn More
    </button>
  </section>

  <section id="features" class="p-8">
    <h2 class="text-3xl font-bold mb-4">Features</h2>
    <!-- Add your features here -->
  </section>

  <section id="blog" class="p-8">
    <h2 class="text-3xl font-bold mb-4">Blog</h2>
    <!-- Add your blog posts here -->
  </section>
</template>

<script setup>
// Your script logic here
</script>

<style scoped>
/* Your scoped styles here */
</style>