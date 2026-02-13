<template>
  <header class="bg-yellow-500 text-white p-4 flex justify-between items-center">
    <div>
      <h1 class="text-2xl font-bold">Travel Agency</h1>
      <p class="text-sm">Book your dream vacation today with us and get a 20% discount on your first trip.</p>
    </div>
    <div>
      <input type="text" placeholder="Search destinations" class="p-2 rounded-l">
      <button class="bg-yellow-700 text-white p-2 rounded-r">Search</button>
    </div>
  </header>
  <section class="text-center p-8">
    <h2 class="text-3xl font-bold mb-4">Discover our popular destinations</h2>
    <div class="flex justify-around">
      <div>
        <img src="https://static.photos/travel/900x600/131.webp" alt="Beach" class="mb-2">
        <p>Experience the best beaches in the world.</p>
      </div>
      <div>
        <img src="https://static.photos/travel/900x600/132.webp" alt="Mountain" class="mb-2">
        <p>Explore the breathtaking mountains.</p>
      </div>
      <div>
        <img src="https://static.photos/travel/900x600/133.webp" alt="City" class="mb-2">
        <p>Immerse yourself in the vibrant city life.</p>
      </div>
    </div>
  </section>
  <section class="bg-yellow-500 text-white p-4 text-center">
    <h2 class="text-2xl font-bold mb-2">Ready to book your trip?</h2>
    <p class="mb-2">We are here to help you plan your dream vacation.</p>
    <button class="bg-white text-yellow-500 p-2 rounded">Book Now</button>
  </section>
</template>

<script setup>
// No script needed for this simple template
</script>