<template>
  <header class="bg-green-800 text-white p-4">
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-2xl">Travel Agency</h1>
      <div class="flex items-center">
        <input type="text" placeholder="Search" class="mr-2 p-2 border border-white rounded">
        <button class="bg-white text-green-800 p-2 rounded">Book Now</button>
      </div>
    </div>
  </header>

  <main class="container mx-auto p-4">
    <section class="my-8">
      <h2 class="text-3xl mb-4">Destinations</h2>
      <!-- Destination content goes here -->
    </section>

    <section class="my-8">
      <h2 class="text-3xl mb-4">Tours</h2>
      <!-- Tours content goes here -->
    </section>

    <section class="my-8">
      <h2 class="text-3xl mb-4">Testimonials</h2>
      <!-- Testimonials content goes here -->
    </section>
  </main>

  <footer class="bg-green-800 text-white p-4 text-center">
    <p>© 2022 Travel Agency. All rights reserved.</p>
  </footer>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Tailwind CSS is included via CDN in the template */
</style>