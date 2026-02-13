<template>
  <header class="w-full h-64 bg-cover bg-center" :style="{ backgroundImage: 'url(https://picsum.photos/seed/83/1600/900)' }">
    <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-xl tracking-tight">Travel Agency</span>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a href="#destinations" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Destinations</a>
          <a href="#about" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">About Us</a>
          <a href="#contact" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">Contact</a>
        </div>
      </div>
    </nav>
  </header>
  <main class="container mx-auto px-4 py-8">
    <section id="destinations" class="my-8">
      <h2 class="text-3xl font-bold mb-4">Popular Destinations</h2>
      <!-- Add your destinations here -->
    </section>
    <section id="about" class="my-8">
      <h2 class="text-3xl font-bold mb-4">About Us</h2>
      <p class="text-lg">
        At Travel Agency, we are passionate about travel and helping our clients discover the world. We believe that travel is not just about reaching a destination, but about experiencing different cultures, landscapes, and people. We offer a wide range of travel packages to suit every taste and budget. Whether you're looking for a romantic getaway, a family vacation, or an adventure, we're here to help you plan your next trip.
      </p>
    </section>
    <section id="contact" class="my-8">
      <h2 class="text-3xl font-bold mb-4">Contact Us</h2>
      <!-- Add your contact form here -->
    </section>
  </main>
</template>

<script setup>
// Your script setup logic here
</script>

<style scoped>
/* Your scoped styles here */
</style>