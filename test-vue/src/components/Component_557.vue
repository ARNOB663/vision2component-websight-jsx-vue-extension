<template>
  <header class="bg-cover bg-center h-screen flex items-center justify-center" :style="{ backgroundImage: 'url(https://static.photos/business/1600x900/158.webp)' }">
    <nav class="absolute top-0 w-full">
      <ul class="flex justify-end p-4">
        <li class="mx-2"><a href="#destinations" class="text-white">Destinations</a></li>
        <li class="mx-2"><a href="#packages" class="text-white">Packages</a></li>
        <li class="mx-2"><a href="#testimonials" class="text-white">Testimonials</a></li>
      </ul>
    </nav>
    <div class="text-center">
      <h1 class="text-4xl text-white mb-4">Welcome to our travel agency</h1>
      <p class="text-xl text-white mb-8">We offer the best travel packages for your next adventure</p>
      <button class="bg-white text-purple-500 px-4 py-2 rounded">Book Now</button>
    </div>
  </header>
  <main class="container mx-auto p-4">
    <section id="destinations" class="mb-8">
      <h2 class="text-3xl mb-4">Destinations</h2>
      <!-- Destinations content here -->
    </section>
    <section id="packages" class="mb-8">
      <h2 class="text-3xl mb-4">Packages</h2>
      <!-- Packages content here -->
    </section>
    <section id="testimonials" class="mb-8">
      <h2 class="text-3xl mb-4">Testimonials</h2>
      <!-- Testimonials content here -->
    </section>
  </main>
  <footer class="bg-purple-500 text-white p-4">
    <!-- Footer content here -->
  </footer>
</template>

<script setup>
// Your script logic here
</script>

<style scoped>
/* Your scoped styles here */
</style>