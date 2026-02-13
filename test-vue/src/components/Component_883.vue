<template>
  <div class="bg-cover bg-center h-screen flex items-center justify-center" :style="{ backgroundImage: 'url(https://static.photos/travel/1600x900/84.webp)' }">
    <div class="text-center p-5 text-white">
      <h1 class="text-5xl">Welcome to our Travel Agency</h1>
      <p class="text-2xl my-4">Experience the world with us. We offer a wide range of travel packages to suit every taste and budget.</p>
      <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">Book Now</button>
    </div>
  </div>

  <div class="container mx-auto p-5">
    <h2 class="text-3xl my-4">Popular Destinations</h2>
    <div class="flex flex-wrap -mx-2 overflow-hidden">
      <div class="my-2 px-2 w-full overflow-hidden md:w-1/3">
        <img class="rounded" src="https://static.photos/travel/900x600/85.webp" alt="Beach">
        <h3 class="text-xl my-2">Beach Destinations</h3>
        <p>Discover the best beaches in the world.</p>
      </div>
      <!-- Repeat the above div for each destination -->
    </div>

    <h2 class="text-3xl my-4">Customer Testimonials</h2>
    <div class="flex flex-wrap -mx-2 overflow-hidden">
      <div class="my-2 px-2 w-full overflow-hidden md:w-1/3">
        <img class="rounded-full" src="https://static.photos/travel/900x600/86.webp" alt="Person">
        <h3 class="text-xl my-2">John Doe</h3>
        <p>"I had the best trip ever with this agency. Highly recommend!"</p>
      </div>
      <!-- Repeat the above div for each testimonial -->
    </div>
  </div>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>