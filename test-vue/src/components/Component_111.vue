<template>
  <nav class="flex items-center justify-between flex-wrap p-6">
    <div class="flex items-center flex-shrink-0 mr-6">
      <span class="font-semibold text-xl tracking-tight">Travel Agency</span>
    </div>
    <div class="block">
      <div class="flex items-center">
        <a href="#destinations" class="mr-6">Destinations</a>
        <a href="#packages" class="mr-6">Packages</a>
        <a href="#testimonials" class="mr-6">Testimonials</a>
      </div>
    </div>
  </nav>

  <section class="h-screen flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-5xl mb-4">Welcome to our travel agency</h1>
      <p class="text-xl mb-6">We offer the best travel experiences for your next adventure.</p>
      <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Book Now
      </button>
    </div>
  </section>

  <section id="destinations" class="py-12">
    <h2 class="text-3xl mb-6">Destinations</h2>
    <!-- Destinations content here -->
  </section>

  <section id="packages" class="py-12">
    <h2 class="text-3xl mb-6">Packages</h2>
    <!-- Packages content here -->
  </section>

  <section id="testimonials" class="py-12">
    <h2 class="text-3xl mb-6">Testimonials</h2>
    <!-- Testimonials content here -->
  </section>

  <footer class="bg-gray-800 text-white text-center py-6">
    <p>Contact us at: info@travelagency.com</p>
    <p>Sign up for our newsletter:</p>
    <!-- Newsletter signup form here -->
  </footer>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Tailwind CSS is included via CDN in the template */
</style>