<template>
  <header class="bg-cover bg-center h-screen flex items-center justify-center" :style="{ backgroundImage: 'url(https://picsum.photos/seed/306/1600/900)' }">
    <div class="text-center">
      <img src="https://picsum.photos/seed/306/300/300" alt="Restaurant Logo" class="mx-auto mb-4">
      <h1 class="text-4xl text-white">Welcome to Our Restaurant</h1>
      <p class="text-xl text-white mb-4">Experience the best food in town</p>
      <a href="#" class="bg-white text-indigo-500 px-4 py-2 rounded">Make a Reservation</a>
    </div>
  </header>

  <main class="container mx-auto py-8">
    <section class="mb-8">
      <h2 class="text-3xl mb-4">Our Menu</h2>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <img src="https://picsum.photos/seed/306/900/600" alt="Dish 1" class="mb-2">
          <h3 class="text-xl">Dish 1</h3>
          <p>A delicious appetizer made with locally sourced ingredients.</p>
        </div>
        <div>
          <img src="https://picsum.photos/seed/306/900/600" alt="Dish 2" class="mb-2">
          <h3 class="text-xl">Dish 2</h3>
          <p>A savory main course that is sure to satisfy.</p>
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-3xl mb-4">Testimonials</h2>
      <!-- Add testimonials here -->
    </section>
  </main>

  <footer class="bg-gray-800 text-white py-8">
    <div class="container mx-auto">
      <div class="grid grid-cols-2 gap-4">
        <div>
          <h3 class="text-xl mb-4">Location</h3>
          <p>123 Main St, City, State</p>
          <!-- Add map here -->
        </div>
        <div>
          <h3 class="text-xl mb-4">Links</h3>
          <ul>
            <li><a href="#" class="text-indigo-300">Menu</a></li>
            <li><a href="#" class="text-indigo-300">Reservations</a></li>
            <li><a href="#" class="text-indigo-300">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Tailwind CSS styles can be added here if needed */
</style>