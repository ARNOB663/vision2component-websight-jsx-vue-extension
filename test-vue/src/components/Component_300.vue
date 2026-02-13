<template>
  <header class="w-full h-64 bg-cover bg-center" :style="{ backgroundImage: 'url(https://picsum.photos/seed/300/1600/900)' }">
    <div class="flex items-center justify-between p-4">
      <img src="https://picsum.photos/seed/300/300/300" alt="Logo" class="h-16">
      <nav>
        <ul class="flex space-x-4">
          <li><a href="#" class="text-white hover:text-gray-200">Home</a></li>
          <li><a href="#" class="text-white hover:text-gray-200">About</a></li>
          <li><a href="#" class="text-white hover:text-gray-200">Services</a></li>
          <li><a href="#" class="text-white hover:text-gray-200">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
  <main class="container mx-auto p-4">
    <section class="my-8">
      <h1 class="text-4xl font-bold">Welcome to our Energy Company</h1>
      <p class="my-4">We are a leading provider of energy solutions, offering a wide range of services to meet your needs. Whether you're looking for solar assessments, energy audits, or any other energy-related services, we're here to help.</p>
      <a href="#" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Get a Quote</a>
    </section>
  </main>
  <footer class="bg-gray-800 text-white p-4">
    <div class="container mx-auto">
      <p>© 2022 Energy Company. All rights reserved.</p>
      <p>Follow us on: Twitter | Facebook | Instagram</p>
    </div>
  </footer>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Tailwind CSS styles are automatically included via CDN */
</style>