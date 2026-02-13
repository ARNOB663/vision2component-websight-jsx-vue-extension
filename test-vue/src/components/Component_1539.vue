<template>
  <div class="bg-blue-100">
    <nav class="bg-blue-500 text-white p-4 flex items-center justify-between">
      <div class="logo">
        <!-- Placeholder for logo -->
        <img src="https://static.photos/education/900x600/141.webp" alt="Logo" class="w-20 h-20">
      </div>
      <ul class="flex space-x-4">
        <li><a href="#" class="hover:text-gray-300">Home</a></li>
        <li><a href="#" class="hover:text-gray-300">About</a></li>
        <li><a href="#" class="hover:text-gray-300">Contact</a></li>
      </ul>
    </nav>

    <header class="bg-green-500 text-white p-4 text-center">
      <h1 class="text-2xl">Welcome to Our Education Institute</h1>
      <p>We provide quality education and training to help you reach your goals.</p>
    </header>

    <main class="container mx-auto px-4 py-8 grid grid-cols-3 gap-6">
      <section class="col-span-1 bg-white p-4 rounded-lg shadow-md">
        <h2 class="text-xl mb-2">News</h2>
        <p>Here is some news about our institute.</p>
      </section>

      <section class="col-span-1 bg-white p-4 rounded-lg shadow-md">
        <h2 class="text-xl mb-2">Events</h2>
        <p>Here are some upcoming events at our institute.</p>
      </section>

      <section class="col-span-1 bg-white p-4 rounded-lg shadow-md">
        <h2 class="text-xl mb-2">Programs</h2>
        <p>Here are some of the programs we offer.</p>
      </section>
    </main>
  </div>
</template>

<script setup>
// No script needed for this simple example
</script>

<style scoped>
/* Add any custom styles here */
</style>