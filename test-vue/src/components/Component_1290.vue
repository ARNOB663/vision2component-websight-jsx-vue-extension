<template>
  <div class="bg-gray-100">
    <header class="bg-white p-4 flex justify-between items-center">
      <img src="https://static.photos/cars/300x300/92.webp" alt="Logo" class="h-10">
      <nav>
        <ul class="flex space-x-4">
          <li><a href="#services" class="text-gray-600 hover:text-gray-900">Services</a></li>
          <li><a href="#testimonials" class="text-gray-600 hover:text-gray-900">Testimonials</a></li>
          <li><a href="#pricing" class="text-gray-600 hover:text-gray-900">Pricing</a></li>
          <li><a href="#contact" class="text-gray-600 hover:text-gray-900">Contact</a></li>
        </ul>
      </nav>
    </header>

    <main class="max-w-screen-lg mx-auto p-4">
      <section id="services" class="my-8">
        <h2 class="text-2xl font-bold mb-4">Our Services</h2>
        <p class="mb-4">We offer a wide range of automotive repair services, including oil changes, tire rotations, and brake service. We use high-quality parts to ensure your vehicle is always in the best possible condition.</p>
        <a href="#contact" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Book Now</a>
      </section>

      <!-- Add more sections for testimonials, pricing, etc. -->
    </main>

    <footer class="bg-white p-4 text-center">
      <p>© 2022 Automotive Repair Shop. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
// No script needed for this basic template
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>