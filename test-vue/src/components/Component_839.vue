<template>
  <div class="bg-gray-100 font-sans leading-normal tracking-normal">
    <header class="bg-cover bg-center h-screen" :style="{ backgroundImage: 'url(https://static.photos/art/1600x900/40.webp)' }">
      <div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center h-full">
        <div class="w-full">
          <h1 class="text-5xl font-bold text-white leading-tight">
            Welcome to our Food Delivery Service
          </h1>
          <p class="text-2xl text-white">
            We offer the best food delivery service in town. Enjoy our delicious meals and have a great time.
          </p>
        </div>
      </div>
    </header>

    <div class="container mx-auto px-6 md:px-12 py-12">
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/3 bg-white p-5">
          <h2 class="text-3xl font-bold">About Us</h2>
          <p class="text-gray-600">
            We are a team of passionate food lovers who love to share our love for food with the world. Our mission is to provide the best food delivery service in town. We believe in quality, freshness, and convenience.
          </p>
        </div>
        <div class="w-full md:w-2/3 bg-white p-5">
          <h2 class="text-3xl font-bold">Our Services</h2>
          <p class="text-gray-600">
            We offer a wide range of services including food delivery, catering, and event planning. We also offer a loyalty program for our regular customers.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>