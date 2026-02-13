<template>
  <div class="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover" :style="{ backgroundImage: 'url(\'https://static.photos/art/1600x900/181.webp\')' }">
    <header class="bg-white w-full">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src="https://static.photos/art/300x300/182.webp" alt="Logo">
          <span class="ml-3 text-xl">Creative Marketing Agency</span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="#services" class="mr-5 hover:text-gray-900">Services</a>
          <a href="#about" class="mr-5 hover:text-gray-900">About</a>
          <a href="#contact" class="mr-5 hover:text-gray-900">Contact</a>
        </nav>
      </div>
    </header>

    <section id="services" class="py-20 bg-white">
      <div class="container mx-auto flex flex-wrap pt-4 pb-12">
        <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Our Services
        </h2>
        <!-- Add your services here -->
      </div>
    </section>

    <section id="about" class="py-20 bg-gray-200">
      <div class="container mx-auto flex flex-wrap pt-4 pb-12">
        <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          About Us
        </h2>
        <!-- Add your about us content here -->
      </div>
    </section>

    <section id="contact" class="py-20 bg-white">
      <div class="container mx-auto flex flex-wrap pt-4 pb-12">
        <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Contact Us
        </h2>
        <!-- Add your contact form here -->
      </div>
    </section>
  </div>
</template>

<script setup>
// Your script logic here
</script>

<style scoped>
/* Your scoped styles here */
</style>