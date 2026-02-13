<template>
  <div class="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover bg-center" :style="{ backgroundImage: 'url(\'https://static.photos/real-estate/1600x900/37.webp\')' }">
    <header class="flex items-center justify-between flex-wrap p-6 bg-teal-500">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-xl tracking-tight">Real Estate Business</span>
      </div>
      <nav class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a href="#properties" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Properties
          </a>
          <a href="#about" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            About
          </a>
        </div>
      </nav>
    </header>
    <main class="flex flex-wrap">
      <section id="properties" class="w-full lg:w-1/2 p-6">
        <h2 class="text-2xl font-bold mb-4">Properties for Sale</h2>
        <!-- Add your properties here -->
      </section>
      <section id="about" class="w-full lg:w-1/2 p-6">
        <h2 class="text-2xl font-bold mb-4">About Us</h2>
        <p class="text-lg">
          We are a real estate business that specializes in finding the perfect home for you. With our extensive network of properties, we are able to provide you with a wide range of options. Whether you are looking for a single-family home, a condo, or a luxury estate, we have something for everyone.
        </p>
      </section>
    </main>
  </div>
</template>

<script setup>
// Your script logic here
</script>

<style scoped>
/* Your scoped styles here */
</style>