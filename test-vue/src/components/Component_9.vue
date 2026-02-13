<template>
  <header class="bg-pink-500 text-white p-4">
    <h1 class="text-2xl font-bold">Technology Company</h1>
    <nav class="hidden md:block">
      <ul class="flex space-x-4">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
    <button class="md:hidden">
      <!-- Hamburger icon -->
    </button>
  </header>
  <main class="flex flex-col items-center justify-center h-screen">
    <img src="https://picsum.photos/seed/9/900/600" alt="Hero Image" class="w-full h-full object-cover">
    <h2 class="text-4xl font-bold mt-8">Welcome to our Technology Company</h2>
    <p class="text-lg mt-4">We are a leading provider of cutting-edge technology solutions. Our team of experts is dedicated to delivering innovative and efficient solutions to meet your business needs. Whether you're looking for a new software, a custom hardware solution, or a complete IT infrastructure, we've got you covered.</p>
  </main>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* No scoped styles needed for this example */
</style>