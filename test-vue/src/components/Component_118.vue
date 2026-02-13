<template>
  <header class="w-full h-64 bg-cover bg-center" :style="{ backgroundImage: 'url(\'https://picsum.photos/seed/118/1600/900\')' }">
    <div class="flex items-center justify-between p-4">
      <img src="https://picsum.photos/seed/118/300/300" alt="Company Logo" class="h-16">
      <nav>
        <ul class="flex space-x-4">
          <li><a href="#" class="text-white hover:text-indigo-300">Home</a></li>
          <li><a href="#" class="text-white hover:text-indigo-300">About</a></li>
          <li><a href="#" class="text-white hover:text-indigo-300">Properties</a></li>
          <li><a href="#" class="text-white hover:text-indigo-300">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
  <main class="flex p-4">
    <section class="w-1/2 p-4">
      <h1 class="text-2xl">Welcome to Our Real Estate Agency</h1>
      <p class="my-4">We are a professional real estate agency specializing in finding your dream home. With years of experience, we have a wide selection of properties to choose from. Whether you're looking for a luxury home, a cozy cottage, or a spacious estate, we have something for everyone.</p>
    </section>
    <section class="w-1/2 p-4">
      <h2 class="text-xl">Featured Properties</h2>
      <!-- Add your property listings here -->
    </section>
  </main>
</template>

<script setup>
// Your script setup logic here
</script>

<style scoped>
/* Your scoped styles here */
</style>