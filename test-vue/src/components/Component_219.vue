<template>
  <header class="flex justify-center items-center h-screen bg-cover bg-center" :style="{ backgroundImage: 'url(https://picsum.photos/seed/219/1600/900)' }">
    <nav class="absolute top-0 w-full">
      <ul class="flex justify-center space-x-4 pt-6">
        <li><a href="#showcase" class="text-white">Showcase</a></li>
        <li><a href="#about" class="text-white">About Us</a></li>
        <li><a href="#services" class="text-white">Services</a></li>
      </ul>
    </nav>
  </header>

  <section id="showcase" class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-4xl mb-4">Welcome to our Tech Company</h1>
    <p class="text-center mb-8">We are a leading provider of cutting-edge technology solutions. Our team of experts is dedicated to delivering the best possible service to our clients.</p>
    <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
  </section>

  <section id="about" class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-4xl mb-4">About Us</h1>
    <p class="text-center mb-8">Our company was founded in 2005 with the goal of revolutionizing the tech industry. We have a track record of success and are proud of our reputation for excellence.</p>
    <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
  </section>

  <section id="services" class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-4xl mb-4">Our Services</h1>
    <p class="text-center mb-8">We offer a wide range of services including software development, IT consulting, and cybersecurity. We are committed to providing our clients with the best possible service.</p>
    <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
  </section>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>