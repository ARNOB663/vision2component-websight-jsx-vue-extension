<template>
  <header class="bg-red-500 text-white p-4 text-center">
    <h1 class="text-4xl">Welcome to our Travel Agency</h1>
    <p class="text-xl">Discover the world with us</p>
    <button class="bg-white text-red-500 p-2 rounded mt-4">Book a trip</button>
  </header>

  <section class="container mx-auto p-4">
    <h2 class="text-3xl mb-4">Destinations</h2>
    <div class="grid grid-cols-3 gap-4">
      <div v-for="(destination, index) in destinations" :key="index" class="bg-white p-4 rounded shadow">
        <img :src="'https://picsum.photos/900x600?image=' + destination.image" :alt="destination.name">
        <h3 class="text-2xl mt-2">{{ destination.name }}</h3>
        <p>{{ destination.description }}</p>
      </div>
    </div>
  </section>

  <section class="container mx-auto p-4">
    <h2 class="text-3xl mb-4">Travel Packages</h2>
    <!-- Add your travel packages here -->
  </section>

  <section class="container mx-auto p-4">
    <h2 class="text-3xl mb-4">Customer Photos</h2>
    <!-- Add your customer photos here -->
  </section>
</template>

<script setup>
const destinations = [
  {
    name: 'Beach',
    description: 'Experience the best beaches in the world.',
    image: 101
  },
  // Add more destinations as needed
]
</script>