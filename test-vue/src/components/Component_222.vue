<template>
  <div class="relative h-screen overflow-hidden bg-cover bg-center" :style="{ backgroundImage: 'url(https://picsum.photos/seed/222/1600/900)' }">
    <nav class="absolute top-0 w-full p-4 text-white bg-black bg-opacity-50">
      <ul class="flex justify-center">
        <li class="mx-2"><a href="#projects">Projects</a></li>
        <li class="mx-2"><a href="#about">About</a></li>
        <li class="mx-2"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    <div class="flex items-center justify-center h-full">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-white">Welcome to our Architecture Firm</h1>
        <p class="mt-4 text-xl text-white">We are a dynamic team of architects, designers, and engineers dedicated to creating innovative and sustainable buildings.</p>
        <button class="px-4 py-2 mt-4 font-bold text-white bg-red-500 rounded hover:bg-red-700">Learn More</button>
      </div>
    </div>
  </div>
  <section id="projects" class="p-4">
    <h2 class="text-2xl font-bold">Featured Projects</h2>
    <!-- Add your projects here -->
  </section>
  <section id="about" class="p-4">
    <h2 class="text-2xl font-bold">About Us</h2>
    <!-- Add your about us information here -->
  </section>
  <section id="contact" class="p-4">
    <h2 class="text-2xl font-bold">Contact Us</h2>
    <!-- Add your contact information here -->
  </section>
</template>

<script setup>
// Your script logic here if needed
</script>

<style scoped>
/* Your scoped styles here if needed */
</style>